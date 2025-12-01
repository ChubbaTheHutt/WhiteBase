//Iosefa Sunia - Web Prog Fall 2025
const express = require('express');
const { check } = require('express-validator');

const usersControllers = require('../controllers/users-controllers');
const router = express.Router();

router.get('/:username', usersControllers.getUserById);
router.post('/login', usersControllers.login);
router.post('/signup', usersControllers.signup);

module.exports = router;