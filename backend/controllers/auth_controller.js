const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const db = require("../db");

const register = async (req, res) => {
  try {
    const { email, password, display_name } = req.body;

    const [existingUsers] = await db.execute(
      "SELECT id FROM users WHERE email = ?",
      [email]
    );

    if (existingUsers.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Email already registered",
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const [result] = await db.execute(
      "INSERT INTO users (email, password_hash, display_name) VALUES (?, ?, ?)",
      [email, passwordHash, display_name]
    );

    const userId = result.insertId;

    req.session.userId = userId;
    req.session.email = email;
    req.session.display_name = display_name;

    res.status(201).json({
      success: true,
      message: "User registered and logged in successfully",
      data: {
        userId,
        email,
        display_name,
        sessionId: req.session.id,
      },
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({
      success: false,
      message: "Registration failed",
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;

    const [users] = await db.execute(
      "SELECT id, email, password_hash, display_name, points, level, avatar_name FROM users WHERE email = ?",
      [email]
    );

    if (users.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const user = users[0];

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    req.session.userId = user.id;
    req.session.email = user.email;
    req.session.display_name = user.display_name;

    delete user.password_hash;

    res.json({
      success: true,
      message: "Login successful",
      user: {
        id: user.id,
        email: user.email,
        display_name: user.display_name,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Login failed",
      error: error.message,
    });
  }
};

const logout = async (req, res) => {
  try {
    if (!req.session || !req.session.userId) {
      return res.status(400).json({
        success: false,
        message: "No active session found",
      });
    }

    req.session.destroy((err) => {
      if (err) {
        console.error("Session destroy error:", err);
        return res.status(500).json({
          success: false,
          message: "Logout failed",
        });
      }

      res.json({
        success: true,
        message: "Logged out successfully",
      });
    });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({
      success: false,
      message: "Logout failed",
      error: error.message,
    });
  }
};

const getCurrentUser = async (req, res) => {
  try {
    if (!req.session || !req.session.userId) {
      return res.status(401).json({
        success: false,
        message: "Not authenticated",
      });
    }

    const [users] = await db.execute(
      "SELECT id, email, display_name, points, level, avatar_name, created_at FROM users WHERE id = ?",
      [req.session.userId]
    );

    if (users.length === 0) {
      req.session.destroy();
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    const user = users[0];

    const [userBadges] = await db.execute(
      `SELECT b.id, b.name, b.image_name, b.criteria, ub.awarded_at 
                FROM user_badges ub 
                JOIN badges b ON ub.badge_id = b.id 
                WHERE ub.user_id = ? 
                ORDER BY ub.awarded_at DESC`,
      [req.session.userId]
    );

    const [allBadges] = await db.execute(
      "SELECT id, name, image_name, criteria FROM badges ORDER BY id"
    );

    const badgeStats = {
      earned_badges: userBadges.length,
      progress_percentage: Math.round(
        (userBadges.length / allBadges.length) * 100
      ),
    };

    const [totalActions] = await db.execute(
      "SELECT COUNT(*) as total_actions FROM user_actions WHERE user_id = ?",
      [req.session.userId]
    );

    const [nextLevelInfo] = await db.execute(
      "SELECT id, name, min_points FROM levels WHERE id = ? LIMIT 1",
      [user.level + 1]
    );

    let nextLevel = null;
    if (nextLevelInfo.length > 0) {
      nextLevel = nextLevelInfo[0];
    }

    res.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        display_name: user.display_name,
        points: user.points,
        level: user.level,
        avatar_name: user.avatar_name,
        created_at: user.created_at,
        total_actions: totalActions[0].total_actions,
        next_level: nextLevel,
        earned_badges: userBadges,
        badge_statistics: badgeStats,
      },
    });
  } catch (error) {
    console.error("Get current user error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to get user data",
      error: error.message,
    });
  }
};

module.exports = { register, login, logout, getCurrentUser };
