const db = require('../db');

const actionController = {
    getAllActions: async (req, res) => {
        try {
        const { category } = req.query;
        let query = 'SELECT * FROM actions';
        let params = [];

        if (category) {
            query += ' WHERE category = ?';
            params.push(category);
        }

        query += ' ORDER BY req_level ASC, points ASC';
        
        const [actions] = await db.execute(query, params);
        res.json({
            success: true,
            data: actions,
            count: actions.length
        });
        } catch (error) {
        res.status(500).json({ error: 'Gagal mengambil data actions', details: error.message });
        }
    },

    getActionById: async (req, res) => {
        try {
        const { id } = req.params;
        const [actions] = await db.execute('SELECT * FROM actions WHERE id = ?', [id]);
        
        if (actions.length === 0) {
            return res.status(404).json({ error: 'Action tidak ditemukan' });
        }

        res.json({
            success: true,
            data: actions[0]
        });
        } catch (error) {
        res.status(500).json({ error: 'Gagal mengambil data action', details: error.message });
        }
    },

    getActionsByCategory: async (req, res) => {
        try {
            const { category } = req.params;
            const [actions] = await db.execute(
                'SELECT * FROM actions WHERE category = ? ORDER BY req_level ASC, points ASC',
                [category]
            );
            res.json({
                success: true,
                data: actions,
                count: actions.length
            });
        } catch (error) {
            res.status(500).json({ error: 'Gagal mengambil data actions berdasarkan kategori', details: error.message });
        }    
    }
};

module.exports = actionController;
