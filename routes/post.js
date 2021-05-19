const express = require('express');
const { requiresAuth } = require('express-openid-connect');
const router = express.Router()
const Post = require('../models/model')
const { checkAuth } = require('../config/auth_middleware')


router.get("/:postId", checkAuth ,function(req, res){
  const requestedPostId = req.params.postId;

  Post.findOne({_id: requestedPostId}, function(err, post){
    res.render("post", {
      title: post.title,
      content: post.content
    });
  });

});


module.exports = router
