import axios from "axios/index";

export function getUserInfoService(userId) {
    return new Promise(async (resolve, reject) => {
        axios.get(process.env.REACT_APP_API_URL + "/users/" + userId)
        .then(results => {
            resolve(results.data) 
        })
        .catch(err => { 
            console.error(err);
            resolve(false);
        });
    })
};