import axios from "axios/index";

export function signUpNewUser(data) {

    console.log("data :", data);

    return new Promise(async (resolve, reject) => {
        const dataHttp = new FormData()
 
        dataHttp.append('firstname', data.firstname);
        dataHttp.append('lastname', data.lastname);
        dataHttp.append('password', data.password);
        dataHttp.append('pseudonyme', data.pseudonyme);
        dataHttp.append('email', data.email);
       
        axios.post(process.env.REACT_APP_API_URL + "/users/register", data)
        .then(results => {
            console.log("results :", results.data);
            resolve(results.data) 
        })
        .catch(err => { 
            console.error(err);
            resolve(false);
        });
    })

};