import axios from "axios/index";

export function getAllMembers(page) {
    return new Promise(async (resolve, reject) => {

        const token = localStorage.getItem("token");

        axios.get(process.env.REACT_APP_API_URL + "/users/all/members", {
            headers: {
                "Authorization": `Bearer ` + token
            }
        })
            .then(results => {
                resolve(results.data)
            })
            .catch(err => {
                resolve(false);
            });
    })
};