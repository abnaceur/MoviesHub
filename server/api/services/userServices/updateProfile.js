const User = require('../../models/user')
const utils = require('../utils')
const jwt = require('jsonwebtoken');
const userClass = require('../../classes/userClass');
const hashPwd = require('../../utils/hashPwd');

function userExist(email, pseudonyme) {
    return new Promise((resolve, reject) => {
        User.find(
            { 'email': email }
        ).then(usr => {
            if (usr.length === 0 && pseudonyme !== "") {
                User.find(
                    { 'pseudonyme': pseudonyme }
                ).then(user => {
                    user.length === 0 ?
                        resolve(false) : resolve(true);
                })
            } else resolve(true)
        })
    })
}


function userPseudonymeExist(email, pseudonyme) {
    return new Promise((resolve, reject) => {
        User.find(
            { 'pseudonyme': pseudonyme }
        ).then(user => {
            user.length === 0 ?
                resolve(false) : resolve(true);
        })
    })
}


function userEmailExist(email, pseudonyme) {
    return new Promise((resolve, reject) => {
        User.find(
            { 'email': email }
        ).then(user => {
            user.length === 0 ?
                resolve(false) : resolve(true);
        })
    })
}

async function updateProfile(req, res) {
    User.find({
        _id: req.body.userId
    }).then(async user => {
        if (user.lenght === 0)
            console.log("updateProfile ERR");
        else {
            let checker = false;
            if (req.body.password !== "") {
                let newPwd = await hashPwd.hashPassword(req.body.password);
                user[0].password = newPwd;
            }

            if (user[0].pseudonyme === req.body.pseudonyme ||
                user[0].email === req.body.email) {

                // Handle diffrent email/username
                if (user[0].email !== req.body.email)
                    checker = await userEmailExist(req.body.email, req.body.pseudonyme);

                if (user[0].pseudonyme !== req.body.pseudonyme)
                    checker = await userPseudonymeExist(req.body.email, req.body.pseudonyme)

                if (checker) {
                    res.status(200).json({
                        code: 204,
                        msg: "This email and/or username already exists !"
                    })
                } else {
                    user[0].pseudonyme = req.body.pseudonyme;
                    user[0].imageUrl = req.files.length > 0 ? req.files[0].path : user[0].imageUrl;
                    user[0].email = req.body.email;
                    user[0].name = req.body.firstname + " " + req.body.lastname;
                    user[0].givenName = req.body.firstname;
                    user[0].familyName = req.body.lastname;
                    user[0].dateOfLastUpdate = Date.now();
                    user[0].firstname = req.body.firstname;
                    user[0].lastname = req.body.lastname;
                    User.findByIdAndUpdate(user[0]._id,
                        user[0], {
                        new: false,
                    },
                        function (err, results) {
                            if (err) return res.status(500).json({ code: 500, msg: "Sorry an error occured." });
                            res.status(200).json({
                                code: 200,
                                msg: "Profile Updated with success",
                                imageUrl: user[0].imageUrl,
                                givenName: user[0].givenName,
                                familyName: user[0].familyName
                            })
                        })
                }

            } else {
                if (await userExist(req.body.email, req.body.pseudonyme)) {
                    res.status(200).json({
                        code: 204,
                        msg: "This email and/or username already exists !"
                    })
                } else {
                    user[0].pseudonyme = req.body.pseudonyme;
                    user[0].imageUrl = req.files.length > 0 ? req.files[0].path : user[0].imageUrl;
                    user[0].email = req.body.email;
                    user[0].name = req.body.firstname + " " + req.body.lastname;
                    user[0].givenName = req.body.firstname;
                    user[0].familyName = req.body.lastname;
                    user[0].dateOfLastUpdate = Date.now();
                    user[0].firstname = req.body.firstname;
                    user[0].lastname = req.body.lastname;

                    User.findByIdAndUpdate(user[0]._id,
                        user[0], {
                        new: false,
                    },
                        function (err, results) {
                            if (err) return res.status(500).json({ code: 500, msg: "Sorry an error occured." });
                            res.status(200).json({
                                code: 200,
                                msg: "Profile Updated with success",
                                imageUrl: user[0].imageUrl,
                                givenName: user[0].givenName,
                                familyName: user[0].familyName
                            })
                        })
                }
            }

        }
    }).catch(err => utils.defaultError(res, err))
}

module.exports = {
    updateProfile,
}