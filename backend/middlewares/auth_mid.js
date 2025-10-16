const db = require('../db');

const authenticateUser = async (req, res, next) => {
    try {
        if (!req.session || !req.session.userId) {
        return res.status(401).json({ 
            success: false, 
            message: 'Please login to access this resource' 
        });
        }

        const userId = req.session.userId;
        const [rows] = await db.execute(
        'SELECT id, email, display_name, points, level, avatar_name FROM users WHERE id = ?',
        [userId]
        );

        if (rows.length === 0) {
        req.session.destroy((err) => {
            if (err) console.error('Session destroy error:', err);
        });
        
        return res.status(401).json({ 
            success: false, 
            message: 'User not found. Please login again.' 
        });
        }

        req.user = rows[0];
        next();
    } catch (error) {
        console.error('Authentication middleware error:', error);
        res.status(500).json({ 
        success: false, 
        message: 'Authentication failed', 
        error: error.message 
        });
    }
};

const requireGuest = (req, res, next) => {
    if (req.session && req.session.userId) {
        return res.status(400).json({ 
        success: false, 
        message: 'You are already logged in, please refresh the page' 
        });
    }
    next();
};

module.exports = { authenticateUser, requireGuest };
