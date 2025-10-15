const db = require('../db');

const BadgeSystem = {
    greenStarter: async (connection, user_id) => {
        try {
        const [existingBadge] = await connection.execute(
            'SELECT id FROM user_badges WHERE user_id = ? AND badge_id = 1',
            [user_id]
        );

        if (existingBadge.length > 0) {
            return { awarded: false, badge_id: 1, badge_name: 'Green Starter', reason: 'already_owned' };
        }

        const [firstAction] = await connection.execute(
            'SELECT COUNT(*) as count FROM user_actions WHERE user_id = ?',
            [user_id]
        );

        if (firstAction[0].count === 1) {
            await connection.execute(
            'INSERT INTO user_badges (user_id, badge_id) VALUES (?, 1)',
            [user_id]
            );
            return { awarded: true, badge_id: 1, badge_name: 'Green Starter', reason: 'criteria_met' };
        }

        return { awarded: false, badge_id: 1, badge_name: 'Green Starter', reason: 'criteria_not_met', progress: firstAction[0].count };
        } catch (error) {
        console.error('Error checking Green Starter badge:', error);
        return { awarded: false, badge_id: 1, badge_name: 'Green Starter', reason: 'error', error: error.message };
        }
    },

    plasticHero: async (connection, user_id) => {
        try {
        const [existingBadge] = await connection.execute(
            'SELECT id FROM user_badges WHERE user_id = ? AND badge_id = 2',
            [user_id]
        );

        if (existingBadge.length > 0) {
            return { awarded: false, badge_id: 2, badge_name: 'Plastic Hero', reason: 'already_owned' };
        }

        // Cek criteria
        const [categoryCount] = await connection.execute(
            `SELECT COUNT(*) as count FROM user_actions ua 
            JOIN actions a ON ua.action_id = a.id 
            WHERE ua.user_id = ? AND a.category = 'Kurangi Sampah Plastik'`,
            [user_id]
        );

        if (categoryCount[0].count >= 5) {
            await connection.execute(
            'INSERT INTO user_badges (user_id, badge_id) VALUES (?, 2)',
            [user_id]
            );
            return { awarded: true, badge_id: 2, badge_name: 'Plastic Hero', reason: 'criteria_met' };
        }

        return { 
            awarded: false, 
            badge_id: 2, 
            badge_name: 'Plastic Hero', 
            reason: 'criteria_not_met', 
            progress: categoryCount[0].count,
            required: 5
        };
        } catch (error) {
        console.error('Error checking Plastic Hero badge:', error);
        return { awarded: false, badge_id: 2, badge_name: 'Plastic Hero', reason: 'error', error: error.message };
        }
    },

    // Energy Saver Badge (ID: 3)
    energySaver: async (connection, user_id) => {
        try {
        const [existingBadge] = await connection.execute(
            'SELECT id FROM user_badges WHERE user_id = ? AND badge_id = 3',
            [user_id]
        );

        if (existingBadge.length > 0) {
            return { awarded: false, badge_id: 3, badge_name: 'Energy Saver', reason: 'already_owned' };
        }

        const [categoryCount] = await connection.execute(
            `SELECT COUNT(*) as count FROM user_actions ua 
            JOIN actions a ON ua.action_id = a.id 
            WHERE ua.user_id = ? AND a.category = 'Penghematan Energi'`,
            [user_id]
        );

        if (categoryCount[0].count >= 5) {
            await connection.execute(
            'INSERT INTO user_badges (user_id, badge_id) VALUES (?, 3)',
            [user_id]
            );
            return { awarded: true, badge_id: 3, badge_name: 'Energy Saver', reason: 'criteria_met' };
        }

        return { 
            awarded: false, 
            badge_id: 3, 
            badge_name: 'Energy Saver', 
            reason: 'criteria_not_met', 
            progress: categoryCount[0].count,
            required: 5
        };
        } catch (error) {
        console.error('Error checking Energy Saver badge:', error);
        return { awarded: false, badge_id: 3, badge_name: 'Energy Saver', reason: 'error', error: error.message };
        }
    },

    // Nature Guardian Badge (ID: 4)
    natureGuardian: async (connection, user_id) => {
        try {
        const [existingBadge] = await connection.execute(
            'SELECT id FROM user_badges WHERE user_id = ? AND badge_id = 4',
            [user_id]
        );

        if (existingBadge.length > 0) {
            return { awarded: false, badge_id: 4, badge_name: 'Nature Guardian', reason: 'already_owned' };
        }

        const [categoryCount] = await connection.execute(
            `SELECT COUNT(*) as count FROM user_actions ua 
            JOIN actions a ON ua.action_id = a.id 
            WHERE ua.user_id = ? AND a.category = 'Peduli Alam'`,
            [user_id]
        );

        if (categoryCount[0].count >= 5) {
            await connection.execute(
            'INSERT INTO user_badges (user_id, badge_id) VALUES (?, 4)',
            [user_id]
            );
            return { awarded: true, badge_id: 4, badge_name: 'Nature Guardian', reason: 'criteria_met' };
        }

        return { 
            awarded: false, 
            badge_id: 4, 
            badge_name: 'Nature Guardian', 
            reason: 'criteria_not_met', 
            progress: categoryCount[0].count,
            required: 5
        };
        } catch (error) {
        console.error('Error checking Nature Guardian badge:', error);
        return { awarded: false, badge_id: 4, badge_name: 'Nature Guardian', reason: 'error', error: error.message };
        }
    },

    // Eco Explorer Badge (ID: 5)
    ecoExplorer: async (connection, user_id) => {
        try {
        const [existingBadge] = await connection.execute(
            'SELECT id FROM user_badges WHERE user_id = ? AND badge_id = 5',
            [user_id]
        );

        if (existingBadge.length > 0) {
            return { awarded: false, badge_id: 5, badge_name: 'Eco Explorer', reason: 'already_owned' };
        }

        // Cek criteria
        const [distinctCategories] = await connection.execute(
            `SELECT COUNT(DISTINCT a.category) as count FROM user_actions ua 
            JOIN actions a ON ua.action_id = a.id 
            WHERE ua.user_id = ?`,
            [user_id]
        );

        if (distinctCategories[0].count >= 3) {
            await connection.execute(
            'INSERT INTO user_badges (user_id, badge_id) VALUES (?, 5)',
            [user_id]
            );
            return { awarded: true, badge_id: 5, badge_name: 'Eco Explorer', reason: 'criteria_met' };
        }

        return { 
            awarded: false, 
            badge_id: 5, 
            badge_name: 'Eco Explorer', 
            reason: 'criteria_not_met', 
            progress: distinctCategories[0].count,
            required: 3
        };
        } catch (error) {
        console.error('Error checking Eco Explorer badge:', error);
        return { awarded: false, badge_id: 5, badge_name: 'Eco Explorer', reason: 'error', error: error.message };
        }
    },

    // Eco Master Badge (ID: 6)
    ecoMaster: async (connection, user_id) => {
        try {
        const [existingBadge] = await connection.execute(
            'SELECT id FROM user_badges WHERE user_id = ? AND badge_id = 6',
            [user_id]
        );

        if (existingBadge.length > 0) {
            return { awarded: false, badge_id: 6, badge_name: 'Eco Master', reason: 'already_owned' };
        }

        const [userInfo] = await connection.execute(
            'SELECT level FROM users WHERE id = ?',
            [user_id]
        );
        
        const userLevel = userInfo[0].level;
        const MAX_LEVEL = 5;
        
        if (userLevel >= MAX_LEVEL) {
            await connection.execute(
            'INSERT INTO user_badges (user_id, badge_id) VALUES (?, 6)',
            [user_id]
            );
            return { awarded: true, badge_id: 6, badge_name: 'Eco Master', reason: 'criteria_met' };
        }

        return { 
            awarded: false, 
            badge_id: 6, 
            badge_name: 'Eco Master', 
            reason: 'criteria_not_met', 
            progress: userLevel,
            required: MAX_LEVEL
        };
        } catch (error) {
        console.error('Error checking Eco Master badge:', error);
        return { awarded: false, badge_id: 6, badge_name: 'Eco Master', reason: 'error', error: error.message };
        }
    }
    };

    const checkBadgeEligibilityOptimized = async (connection, user_id) => {
    try {
        console.log(`Checking badge eligibility for user ${user_id}`);
        
        const [ownedBadges] = await connection.execute(
        'SELECT badge_id FROM user_badges WHERE user_id = ?',
        [user_id]
        );
        
        const ownedBadgeIds = ownedBadges.map(badge => badge.badge_id);
        console.log(`User ${user_id} already owns badges:`, ownedBadgeIds);

        const badgeResults = [];
        
        if (!ownedBadgeIds.includes(1)) {
        const [firstAction] = await connection.execute(
            'SELECT COUNT(*) as count FROM user_actions WHERE user_id = ?',
            [user_id]
        );

        if (firstAction[0].count === 1) {
            await connection.execute(
            'INSERT INTO user_badges (user_id, badge_id) VALUES (?, 1)',
            [user_id]
            );
            badgeResults.push({ awarded: true, badge_id: 1, badge_name: 'Green Starter' });
            console.log(`✅ Green Starter badge awarded to user ${user_id}`);
        }
        }

        if (!ownedBadgeIds.includes(2)) {
        const [plasticCount] = await connection.execute(
            `SELECT COUNT(*) as count FROM user_actions ua 
            JOIN actions a ON ua.action_id = a.id 
            WHERE ua.user_id = ? AND a.category = 'Kurangi Sampah Plastik'`,
            [user_id]
        );

        if (plasticCount[0].count >= 5) {
            await connection.execute(
            'INSERT INTO user_badges (user_id, badge_id) VALUES (?, 2)',
            [user_id]
            );
            badgeResults.push({ awarded: true, badge_id: 2, badge_name: 'Plastic Hero' });
            console.log(`✅ Plastic Hero badge awarded to user ${user_id}`);
        }
        }


        if (!ownedBadgeIds.includes(3)) {
        const [energyCount] = await connection.execute(
            `SELECT COUNT(*) as count FROM user_actions ua 
            JOIN actions a ON ua.action_id = a.id 
            WHERE ua.user_id = ? AND a.category = 'Hemat Energi'`,
            [user_id]
        );

        if (energyCount[0].count >= 5) {
            await connection.execute(
            'INSERT INTO user_badges (user_id, badge_id) VALUES (?, 3)',
            [user_id]
            );
            badgeResults.push({ awarded: true, badge_id: 3, badge_name: 'Energy Saver' });
            console.log(`✅ Energy Saver badge awarded to user ${user_id}`);
        }
        }

        if (!ownedBadgeIds.includes(4)) {
        const [natureCount] = await connection.execute(
            `SELECT COUNT(*) as count FROM user_actions ua 
            JOIN actions a ON ua.action_id = a.id 
            WHERE ua.user_id = ? AND a.category = 'Peduli Alam'`,
            [user_id]
        );

        if (natureCount[0].count >= 5) {
            await connection.execute(
            'INSERT INTO user_badges (user_id, badge_id) VALUES (?, 4)',
            [user_id]
            );
            badgeResults.push({ awarded: true, badge_id: 4, badge_name: 'Nature Guardian' });
            console.log(`✅ Nature Guardian badge awarded to user ${user_id}`);
        }
        }

        if (!ownedBadgeIds.includes(5)) {
        const [distinctCategories] = await connection.execute(
            `SELECT COUNT(DISTINCT a.category) as count FROM user_actions ua 
            JOIN actions a ON ua.action_id = a.id 
            WHERE ua.user_id = ?`,
            [user_id]
        );

        if (distinctCategories[0].count >= 3) {
            await connection.execute(
            'INSERT INTO user_badges (user_id, badge_id) VALUES (?, 5)',
            [user_id]
            );
            badgeResults.push({ awarded: true, badge_id: 5, badge_name: 'Eco Explorer' });
            console.log(`✅ Eco Explorer badge awarded to user ${user_id}`);
        }
        }

        if (!ownedBadgeIds.includes(6)) {
        const [userInfo] = await connection.execute(
            'SELECT level FROM users WHERE id = ?',
            [user_id]
        );
        
        const userLevel = userInfo[0].level;
        const MAX_LEVEL = 5;
        
        if (userLevel >= MAX_LEVEL) {
            await connection.execute(
            'INSERT INTO user_badges (user_id, badge_id) VALUES (?, 6)',
            [user_id]
            );
            badgeResults.push({ awarded: true, badge_id: 6, badge_name: 'Eco Master' });
            console.log(`✅ Eco Master badge awarded to user ${user_id}`);
        }
        }
        
        console.log(`Badge eligibility check completed for user ${user_id}. New badges: ${badgeResults.length}`);
        return badgeResults;
        
    } catch (error) {
        console.error('Error in badge eligibility check:', error);
        return [];
    }
};

const userActionController = {
    performAction: async (req, res) => {
        const connection = await db.getConnection();
        
        try {
        await connection.beginTransaction();
        
        const { action_id } = req.body;
        let user_id;

        if (req.session && req.session.userId) {
            user_id = req.session.userId;
        } else if (req.user && req.user.id) {
            user_id = req.user.id;
        } else {
            return res.status(401).json({ 
            success: false, 
            error: 'Not authenticated' 
            });
        }

        const [actions] = await connection.execute('SELECT * FROM actions WHERE id = ?', [action_id]);
        if (actions.length === 0) {
            await connection.rollback();
            return res.status(404).json({ error: 'Action tidak ditemukan' });
        }

        const action = actions[0];

        const [users] = await connection.execute('SELECT level, points FROM users WHERE id = ?', [user_id]);
        const user = users[0];

        if (user.level < action.req_level) {
            await connection.rollback();
            return res.status(400).json({ 
            error: `Level minimal ${action.req_level} diperlukan untuk melakukan action ini` 
            });
        }

        await connection.execute(
            'INSERT INTO user_actions (user_id, action_id) VALUES (?, ?)',
            [user_id, action_id]
        );

        const newPoints = user.points + action.points;
        await connection.execute(
            'UPDATE users SET points = ?, last_action_date = CURDATE() WHERE id = ?',
            [newPoints, user_id]
        );

        const [levels] = await connection.execute(
            'SELECT * FROM levels WHERE min_points <= ? ORDER BY min_points DESC LIMIT 1',
            [newPoints]
        );

        let newLevel = user.level;
        if (levels.length > 0 && levels[0].id > user.level) {
            newLevel = levels[0].id;
            await connection.execute('UPDATE users SET level = ? WHERE id = ?', [newLevel, user_id]);
        }

        const newlyAwardedBadges = await checkBadgeEligibilityOptimized(connection, user_id);

        let badgeDetails = [];
        if (newlyAwardedBadges.length > 0) {
            const newBadgeIds = newlyAwardedBadges.map(badge => badge.badge_id);
            const placeholders = newBadgeIds.map(() => '?').join(',');
            const [badges] = await connection.execute(
            `SELECT id, name, image_name, criteria FROM badges WHERE id IN (${placeholders})`,
            newBadgeIds
            );
            badgeDetails = badges;
        }

        await connection.commit();

        res.status(201).json({
            success: true,
            message: 'Action berhasil dilakukan!',
            data: {
            action_id,
            points_earned: action.points,
            total_points: newPoints,
            level_up: newLevel > user.level,
            new_level: newLevel,
            badges_earned: badgeDetails.length > 0,
            new_badges: badgeDetails,
            badges_count: badgeDetails.length
            }
        });

        } catch (error) {
        await connection.rollback();
        console.error('Perform action error:', error);
        res.status(500).json({ 
            error: 'Gagal melakukan action', 
            details: error.message 
        });
        } finally {
        connection.release();
        }
    },
};

module.exports = userActionController;
