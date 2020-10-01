import axios from "axios";

export function saveMovieComments(data) {
    return new Promise(async (resolve, reject) => {

        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");

        axios.post(process.env.REACT_APP_API_URL + "/movies/comment/save/" + userId, data, {
            headers: {
                "Authorization": `Bearer ` + token
            },
        })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                resolve(false)
            });
    })
};