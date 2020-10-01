import axios from "axios/index";

export function saveMovieDetails(data) {
    return new Promise(async (resolve, reject) => {

        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");

        axios.post(process.env.REACT_APP_API_URL + "/movies/save/" + userId, data, {
            headers: {
                "Authorization": `Bearer ` + token
            },
        })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                console.error(err);
                resolve("");
            });
    })
};