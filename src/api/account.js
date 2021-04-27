import axios from "axios"
import qs from "qs"

export function Login(data){
    axios.post('http://localhost:8089/api/login', qs.stringify(data))
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}

export function Register(data) {
    axios.post('http://localhost:8089/register', qs.stringify(data))
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}