const express = require('express');
const router = express.Router()
const User = require('../models/user')

router.get("/register", function(req, res){
  res.render("register");
});

router.post("/register", function(req, res){
  const post = new User({
   emai: req.body.email,
    name: req.body.name,
    password : req.body.password
  });


  post.save().then(msg =>{ console.log('post Saved');res.redirect("/")})
  .catch(err => {res.status(400).send("unable to save to database");});
});

module.exports = router
