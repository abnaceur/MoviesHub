const User = require('../../models/user')
const utils = require('../utils')
const jwt = require('jsonwebtoken');
const userClass = require('../../classes/userClass');
const hashPwd = require('../../utils/hashPwd');

getSkills = (data) => {
    return new Promise((resolve, reject) => {
        let skills = [];
        let i = 0;

        while (1) {
            if (data["skillsLabel" + i] != undefined) {
                skills.push({
                    id: data["skillsId" + i],
                    label: data["skillsLabel" + i],
                    rang: data["skillsRang" + i]
                })
            } else {
                resolve(skills)
                break;
            }
            i++;
        }
    })
}

async function updateProfile(req, res) {
    User.find({
        _id: req.body.userId
    }).then(async user => {
        if (user.lenght === 0)
            console.log("updateProfile ERR");
        else {
            if (req.body.password !== "") {
                let newPwd = await hashPwd.hashPassword(req.body.password);
                user[0].password = newPwd;
            }
            user[0].pseudonyme =  req.body.pseudonyme;
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
                    if (err) return res.status(500).json({code: 500, msg: "Sorry an error occured."});
                    res.status(200).json({
                        code: 200,
                        msg: "Profile Updated with success",
                        imageUrl:  user[0].imageUrl
                    })
                })
        }
    }).catch(err => utils.defaultError(res, err));
}

module.exports = {
    updateProfile,
}