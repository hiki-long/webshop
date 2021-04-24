import axios from "axios"

export function Login(data){
    axios.post('http://localhost:8089/api/login',data)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}

export function Register(data) {
    axios.post('http://localhost:8089/register', data)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}