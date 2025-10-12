const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
    try {
        const [levels] = await db.execute('SELECT * FROM levels ORDER BY id');
        res.json({
        success: true,
        data: levels
        });
    } catch (error) {
        res.status(500).json({ error: 'Gagal mengambil data levels', details: error.message });
    }
});

module.exports = router;
