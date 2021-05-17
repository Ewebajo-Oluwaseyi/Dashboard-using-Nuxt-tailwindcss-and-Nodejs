const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../models/Users')
const auth = require('../middleware/auth')

router.get('/', auth, async(req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('server error')
    }
})

router.post('/', async(req, res) => {

    const {email, password} = req.body;
    console.log(email)
    console.log(password)
    try {
        let user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({msg: 'Invalid login details'})
        }

        const isMatch = await bcrypt.compare(password , user.password)
        if(!isMatch){
            return res.status(400).json({msg: 'Invalid login details'})
        }

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 36000000000
        }, (err, token)=>{
            if(err) throw err;
            res.json({token})
        })
    } catch (error) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
})

module.exports = router;