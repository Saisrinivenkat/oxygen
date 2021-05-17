const express = require('express');
const router = express.Router()
const data = require('./content')
const Post = require('../models/model')

router.get("/home", function(req, res){

  Post.find({}, function(err, posts){
    res.render("home", {
      startingContent: data.home,
      posts: posts
    });
  });
});

router.get("/about", function(req, res){
  res.render("about", {aboutContent: data.about});
});

router.get("/contact", function(req, res){
  res.render("contact", {contactContent: data.contact});
});

module.exports = router
