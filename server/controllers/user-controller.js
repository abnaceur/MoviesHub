const express = require("express");
const userModel = require("../models/user-model");

const signup = (req, res, next) => {
  userModel.newUser((err, result) => {
    if (!err) {
      return res.status(201).json({ comments: result });
    } else {
      return res.status(400).json({ message: err });
    }
  });
};

const login = (req, res, next) => {
  userModel.verifyUser((err, result) => {
    if (!err) {
      return res.status(201).json({ comments: result });
    } else {
      return res.status(400).json({ message: err });
    }
  });
};

const update = (req, res, next) => {
  const { username, email, firstname, lastname } = req.body;
  userModel.updateUser(username, email, firstname, lastname, (err, result) => {
    if (!err) {
      return res.status(201).json({ comments: result });
    } else {
      return res.status(400).json({ message: err });
    }
  });
};
const updatePassword = (req, res, next) => {
  const { oldpass, newpass, repeatpass } = req.body;
  userModel.updatePass(oldpass, newpass, repeatpass, (err, result) => {
    if (!err) {
      return res.status(201).json({ comments: result });
    } else {
      return res.status(400).json({ message: err });
    }
  });
};

const getProfile = (req, res, next) => {
  userModel.profile((err, result) => {
    if (!err) {
      return res.status(201).json({ user: result });
    } else {
      return res.status(400).json({ message: err });
    }
  });
};
exports.signup = signup;
exports.login = login;
exports.update = update;
exports.getProfile = getProfile;
exports.updatePassword = updatePassword;
