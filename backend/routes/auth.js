const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const {name, email, password} = req.body
        console.log(name);
        console.log(req.body);
    }
    catch(err) {
        console.log(err);
    }
    console.log("Signup")
    console.log(req.body);
    console.log("Finished request");
}); 

module.exports = router;