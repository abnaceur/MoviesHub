import axios from "axios/index";

export function updateUserInfoService(userId, data) {
    return new Promise(async (resolve, reject) => {
        const token = localStorage.getItem("token");
        const dataHttp = new FormData()

        dataHttp.append('firstname', data.firstname);
        dataHttp.append('lastname', data.lastname);
        dataHttp.append('email', data.email); 
        dataHttp.append('password', data.password);
        dataHttp.append('pseudonyme', data.username);
        dataHttp.append('userId', userId);

        if (data.profileImg instanceof Blob)
            await dataHttp.append('file', data.profileImg, data.profileImg.name)

        axios.put(process.env.REACT_APP_API_URL + "/users/profile", dataHttp, {
            headers: {
                "Authorization": `Bearer ` + token
            }
        }).then(results => {
            resolve(results.data)
        }).catch(err => {
            resolve({code: 500, msg: err});
        })
    })
}