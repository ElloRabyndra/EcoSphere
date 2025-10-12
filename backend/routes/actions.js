const express = require('express');
const requireAuth = require('../middlewares/auth_mid').authenticateUser;
const {
    getAllActions,
    getActionById,
    getActionsByCategory
} = require('../controllers/actions_controller');

const router = express.Router();

router.get('/', getAllActions);
router.get('/categories/:category', getActionsByCategory);
router.get('/:id', getActionById);

module.exports = router;