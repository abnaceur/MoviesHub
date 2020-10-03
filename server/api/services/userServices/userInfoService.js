const userClass = require("../../classes/userClass");
const User = require('../../models/user');

async function getUserInfoData(userId, res) {
    User.find({
        _id: userId
    }).select("email")
    .select("pseudonyme")
    .select("givenName")
    .select("familyName")
    .select("imageUrl")
    .exec()
        .then(data => {
            // Check if user exist
            if (data.length > 0) {
                res.status(200).json({
                    code: 200,
                    msg: "User data fetched",
                    data: data[0]
                });
            } else {
                res.status(200).json({
                    code: 500,
                    msg: "THis user does not exist"
                })
            }
        })
}

module.exports = {
    getUserInfoData
}