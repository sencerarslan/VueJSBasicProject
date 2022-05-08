const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.get('/',(req,res)=>{
    User.find().limit(50)
    .then((users)=>{
        res.json(users)
    })
    .catch((err)=>{
        res.json(err)
    })
});

router.get('/:id',(req,res)=>{
    User.findById(req.params.id)
    .then((users)=>{
        res.json(users)
    })
    .catch((err)=>{
        res.json(err)
    })
});

router.post('/',(req,res)=>{
    console.log(req.body);
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        age: req.body.age,
        photo: req.body.photo,
    });
    user.save();
    res.json(user);
});

router.put('/:id',(req,res)=>{
    User.findByIdAndUpdate(req.params.id,
        { 
            username: req.body.username,
            email: req.body.email,
            age: req.body.age,
            photo: req.body.photo,
        })
    .then((users)=>{
        res.json(users)
    })
    .catch((err)=>{
        res.json(err)
    })
});

router.delete('/:id',(req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then((users)=>{
        res.json(users)
    })
    .catch((err)=>{
        res.json(err)
    })
});

module.exports = router;