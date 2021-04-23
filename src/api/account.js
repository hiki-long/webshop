// import service from "../views/utils/requests";

import axios from "axios"

export function Login(data){
    axios.post('http://localhost:3000/api/login',data)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    // return service.request({
    //     url: "/login/",
    //     method: "post",
    //     data,
    // })
}

export function Register(data) {
    axios.post('http://localhost:3000/register', data)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}