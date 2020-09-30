import axios from "axios/index";

export function getMovieViewsByUser() {
    return new Promise((resolve, reject) => {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");

        axios.get(process.env.REACT_APP_API_URL + "/movies/views/" + userId, {
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