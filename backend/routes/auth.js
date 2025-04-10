const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
var MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const {name, username, email, password} = req.body
        console.log(name);
        console.log(req.body);

        // checking if user already exists
        const existingUser = await User.findOne({email});
        if(existingUser) {
            console.log("User already exists");
            return res.status(400).json({message:"User Already Exists"});   
        }
        else{
            console.log("User not already exists");

        }

        // Hashing the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Adding new user:
        const newUser = new User(
            {
                name,
                username,
                email,
                password: hashedPassword,
            }
        );

        await newUser.save();
        res.status(200).json({message: "User created successfully"});
        
    }   
    catch(err) {
        console.log(err); 
    }
    console.log("Signup")
    console.log(req.body);
    console.log("Finished request");
}); 

router.post('/login', async (req, res) => {
    try {
        console.log("Login request");
        console.log(req.body);
        const {email, password} = req.body;
        const isUserExist = await User.findOne({email});
        if(!isUserExist) {
            return res.status(400).json({message: "Invalid Credentials"})
        }

        const isPasswordMatched = await bcrypt.compare(password, isUserExist.password);
        if(!isPasswordMatched) {
            return res.status(400).json({message: "Invalid Credentials"});
        }

        res.status(200).json({message: "Login Successful"});

        console.log("Login successful");
    }
    catch(err) {
        console.log(err);
    }
})

module.exports = router;