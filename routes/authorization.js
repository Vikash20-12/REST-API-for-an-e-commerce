const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


//registration route
router.post('/register', async (req, res)=>{
    //checking if user exists in database
    const usernameExists = await User.findOne({username: req.body.username});
    if(usernameExists) return res.status(400).send('User already exists');

    //Hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //Create a new User
    const user = new User({
        username: req.body.username,
        usertype: req.body.usertype,
        password: hashedPassword
    });
    try{
        const userSaved = await user.save();
        res.send(`${user._id, user.username} registered.`);
    }catch(err){
        res.status(400).send(err);
    }
});


//login route
router.post('/login', async (req, res)=>{
    
    //checking if user exists in database
    const user = await User.findOne({username: req.body.username});
    if(!user) return res.status(400).send('User Not Found');

    //checking if password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send('Invalid Passowrd');
    // res.send(`${user.username} logged in.`);

    //Create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token)
       .send(`${user.username} logged In.`);

});



module.exports = router;
