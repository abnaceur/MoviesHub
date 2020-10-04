const User = require('../../models/user')
const utils = require('../utils')

async function listAlluser(res, page) {
    User.find()
        .sort('dateOfCreation')
        .exec()
        .then(async members => {
            res.status(200).json({
                data: members,
                code: 200,
                msg: "ok"
            })
        })
        .catch(err => utils.defaultError(res, err))
}

module.exports = {
    listAlluser
}