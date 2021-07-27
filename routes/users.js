const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const User = require('../models/Users')
const config = require('config')


router.post('/', async(req, res) => {
    const {name, email, password} = req.body;


    try {
     let user = await User.findOne({email});

     if(user) {
         return res.status(400).json({msg: 'User already exist'});
     }

     user = new User({
        name,
        email,
        password
     });

     const salt = await bcrypt.genSalt(10);
     user.password = await bcrypt.hash(password, salt);

     await user.save();

     const payload = {
         user: {
             id: user.id
         }
     }

     jwt.sign(payload, config.get('jwtSecret'), (err, token) => {
         if(err) throw err;
         res.json({token});
     })
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error')
    }
})


module.exports = router;