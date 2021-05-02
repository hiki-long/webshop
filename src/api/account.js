import axios from "axios"

export function Login(params){
    axios.post('http://localhost:8089/api/login', {
        data: params
        },{
            headers: {
                'Access-Control-Allow-Origin':'*',  //解决cors头问题
                'Access-Control-Allow-Credentials':'true', //解决session问题
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' //将表单数据传递转化为form-data类型
        }})
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}

export function Register(params) {
    axios.post('http://localhost:8089/register', {
        data: params
        },{
            headers: {
                'Access-Control-Allow-Origin':'*',  //解决cors头问题
                'Access-Control-Allow-Credentials':'true', //解决session问题
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' //将表单数据传递转化为form-data类型
        }})
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}