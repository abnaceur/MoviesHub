const express = require("express");
const commentModel = require("../models/comment-model");

const newComment = (req, res, next) => {
  commentModel.postCommentOnMovie((err, result) => {
    if (!err) {
      return res.status(201).json({ comments: result });
    } else {
      return res.status(400).json({ message: err });
    }
  });
};

const getComments = (req, res, next) => {
  commentModel.getCommentsById((err, result) => {
    if (!err) {
      return res.status(201).json({ comments: result });
    } else {
      return res.status(400).json({ message: err });
    }
  });
};

const deleteComment = (req, res, next) => {
  commentModel.deleteCommentsById((err, result) => {
    if (!err) {
      return res.status(201).json({ comments: result });
    } else {
      return res.status(400).json({ message: err });
    }
  });
};

exports.newComment = newComment;
exports.getComments = getComments;
exports.deleteComment = deleteComment;
