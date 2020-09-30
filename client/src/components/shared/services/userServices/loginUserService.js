import axios from "axios/index";

export function loginAuthUser(data) {
    return new Promise(async (resolve, reject) => {
        axios.post(process.env.REACT_APP_API_URL + "/users/loginform", data)
        .then(results => {
            resolve(results.data) 
        })
        .catch(err => { 
            console.error(err);
            resolve(false);
        });
    })

};