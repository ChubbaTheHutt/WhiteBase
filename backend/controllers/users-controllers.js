//Iosefa Sunia - Web Prog Fall 2025
const { validationResult } = require('express-validator');
const User = require('../models/user');

const getUserById = async (req, res, next) => {
    const username = req.params.username;
    try{
        const user = await User.findOne({username: username}, '-password');
        if(!user){
            return res.status(404).json({message: 'User not found.'});
        }
        res.status(200).json({user: user.toObject({getters: true})});
    } catch (err){
        res.status(500).json({message: err});
    }
}

const login = async (req, res, next) => {
    let existing_user;
    try{
        existing_user = await find(User({ username: req.body.username, password: req.body.password}));
        if(!existing_user){
            return res.status(401).json({message: 'Invalid credentials.'});
        }
        res.status(200).json({message: 'Logged in!', user: existing_user});
    } catch (err){
        res.status(500).json({message: err});
    }
} 

const signup = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({message: 'Invalid inputs passed, please check your data.', errors: errors.array()});
    }

    const {username, password} = req.body;
    let existing_user;
    try{
        existing_user = await User.findOne({ username: username});
    } catch (err){
        return res.status(500).json({message: "Checking for existing user failed. Please try again later."});
    }

    if(existing_user){
        return res.status(422).json({message: 'Username already exists!'});
    }

    const created_user = new User({
        username,
        password
    });

    try{
        await created_user.save();
    } catch (err){
        return res.status(500).json({message: "Signing up failed. Please try again later."});
    }

    res.status(201).json({user: created_user.toObject({getters: true})  });
};

exports.getUserById = getUserById;
exports.login = login;
exports.signup = signup;