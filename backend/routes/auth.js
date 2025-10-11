const express = require('express');
const { body } = require('express-validator');
const { requireGuest } = require('../middlewares/auth_mid');
const { register, login, logout, getCurrentUser } = require('../controllers/auth_controller');

const router = express.Router();

router.post('/register', requireGuest, [
    body('email').isEmail().normalizeEmail(),
    body('password'),
    body('display_name').trim().isLength({ min: 1, max: 50 })
], register);

router.post('/login', requireGuest, [
    body('email').isEmail().normalizeEmail(),
    body('password').notEmpty()
], login);

router.post('/logout', logout);

router.get('/me', getCurrentUser);

router.get('/status', (req, res) => {
  res.json({
    success: true,
    authenticated: req.session && req.session.userId ? true : false,
    sessionId: req.session ? req.session.id : null,
    userId: req.session ? req.session.userId : null
  });
});

module.exports = router;
