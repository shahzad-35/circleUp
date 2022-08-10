const express = require('express');

const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/signup', UserController.getSignupForm);

router.get('/login', UserController.getLoginForm);

module.exports = router;