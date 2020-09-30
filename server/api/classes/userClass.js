const mongoose = require('mongoose');
const hashPwd = require('../utils/hashPwd');

async function getHashPwd() {
    return new Promise(async (resolve, reject) => {
        const genPwd = await hashPwd.hashPassword("Abdeljalil123!testinf!@DSdfvxvVfd+vxcVX_");
        resolve(genPwd);
    })
}

creatNewUser = (value) => {
    return new Promise(async (resolve, reject) => {
        resolve({
            _id: new mongoose.Types.ObjectId,
            googleId: value.googleId,
            imageUrl: value.imageUrl,
            email: value.email,
            name: value.name,
            password: await getHashPwd(),
            givenName: value.givenName,
            familyName: value.familyName,
            role: "HR"
        })
    });
}

creatNewRegisterUser = (userInfo, image) => {
    return new Promise(async (resolve, reject) => {
        resolve({
            _id: new mongoose.Types.ObjectId,
            imageUrl: image,
            email: userInfo.email,
            name: userInfo.firstname + " " + userInfo.lastname,
            givenName: userInfo.firstname,
            familyName: userInfo.lastname,
            pseudonyme: userInfo.pseudonyme,
            password: await hashPwd.hashPassword(userInfo.password)
        })
    });
}

module.exports = {
    creatNewRegisterUser,
    creatNewUser,
}