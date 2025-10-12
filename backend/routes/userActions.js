const express = require('express');
const router = express.Router();
const userActionController = require('../controllers/userActions_controller');
const auth = require('../middlewares/auth_mid').authenticateUser;

router.use(auth);

router.post('/', userActionController.performAction, auth);

module.exports = router;
