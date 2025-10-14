const express = require('express');
const { body } = require('express-validator');
const { requireGuest, authenticateUser } = require('../middlewares/auth_mid');
const { register, login, logout, getCurrentUser } = require('../controllers/auth_controller');

const router = express.Router();

router.post('/register', requireGuest, [
    body('email').isEmail().normalizeEmail().notEmpty(),
    body('password').notEmpty(),
    body('display_name').trim().notEmpty()
], register); 

router.post('/login', requireGuest, [
    body('email').isEmail().normalizeEmail().notEmpty(),
    body('password').notEmpty()
], login); 

router.post('/logout', logout);

router.get('/session', getCurrentUser); 
router.get('/me', authenticateUser, getCurrentUser); 

module.exports = router;