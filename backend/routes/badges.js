const express = require('express');
const router = express.Router();
const db = require('../db');
const auth = require('../middlewares/auth_mid').authenticateUser;

router.use(auth);

router.get('/', async (req, res) => {
    try {
        const [badges] = await db.execute('SELECT * FROM badges ORDER BY id');
        res.json({
            success: true,
            data: badges
        });
    } catch (error) {
        res.status(500).json({ error: 'Gagal mengambil data badges', details: error.message });
    }
});

router.get('/user', async (req, res) => {
    try {
        const [userBadges] = await db.execute(
        `SELECT b.*, ub.awarded_at 
        FROM user_badges ub 
        JOIN badges b ON ub.badge_id = b.id 
        WHERE ub.user_id = ? 
        ORDER BY ub.awarded_at DESC`,
        [req.user.id] 
        );

        res.json({
            success: true,
            data: userBadges
        });
    } catch (error) {
        res.status(500).json({ error: 'Gagal mengambil badges user', details: error.message });
    }
});

module.exports = router;