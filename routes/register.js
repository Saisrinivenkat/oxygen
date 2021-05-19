const express = require('express');
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const { checknotAuth } = require('../config/auth_middleware')

router.get("/",checknotAuth, function(req, res){
  res.render("register");
});

router.post("/", checknotAuth ,async function(req, res){
  const password = await bcrypt.hash(req.body.password,10)
  const post = new User({
    email: req.body.email,
    name: req.body.name,
    password : password
  });


  post.save().then(msg =>{ res.redirect("/login")})
  .catch(err => {res.status(400).send("unable to save to database");});
});

module.exports = router
