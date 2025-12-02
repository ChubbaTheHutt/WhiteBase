//Iosefa Sunia - Web Prog Fall 2025
const express = require('express');
const { check } = require('express-validator');

const usersControllers = require('../controllers/users-controllers');
const router = express.Router();

router.get('/:username', usersControllers.getUserById);
router.post('/login',
    [
        check('username').not().isEmpty()
            .withMessage('Username cannot be empty').bail(),
        check('password').not().isEmpty()
            .withMessage('Password cannot be empty').bail()
    ],
    usersControllers.login);
    
router.post('/signup',
    [
        check('username')
            .isLength({ max: 16 }).withMessage('Username must be at most 16 characters long').bail()
            .matches(/^[A-Za-z0-9]+$/).withMessage('Username must be alphanumeric').bail(),
        check('password').isLength({ min: 5 })
            .withMessage('Password must be at least 5 characters long').bail()
    ],
    usersControllers.signup);

module.exports = router;