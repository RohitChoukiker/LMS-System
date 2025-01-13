const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const authController = require('../controllers/authController');

// Sign up route
router.post('/register', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);


// Sign in route


module.exports = router; 