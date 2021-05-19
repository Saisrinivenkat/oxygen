const express = require('express');
const router = express.Router()
const data = require('./content')
const Post = require('../models/model')
const { checkAuth } = require('../config/auth_middleware')


router.get("/home", checkAuth,function(req, res){

  Post.find({}, function(err, posts){
    res.render("home", {
      startingContent: data.home,
      posts: posts
    });
  });
});

router.get("/about", checkAuth ,function(req, res){
  res.render("about", {aboutContent: data.about});
});

router.get("/contact", checkAuth ,function(req, res){
  res.render("contact", {contactContent: data.contact});
});


//Compose
router.get("/compose" ,checkAuth, function(req, res){
  res.render("compose");
});




router.post("/compose", checkAuth ,function(req, res){
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });


  post.save().then(msg =>{ res.redirect("/home")})
  .catch(err => {res.status(400).send("unable to save to database");});
});

module.exports = router
