import { setCookie } from './storeage';
import { Link } from 'react-router-dom';

//登录和注册接口
export async function Login(params){
    const email=params.email;
    const passwd=params.passwd;
    let urlencoded = new URLSearchParams();
    urlencoded.append("email", email);
    urlencoded.append("passwd", passwd);
    let requestOptions = {
        method:'POST',
        redirect: 'follow',
        body:urlencoded,
        credentials: 'include',
        'Access-Control-Allow-Credentials':'true',
    };
    
    const data = await fetch("http://localhost:8089/user/login",requestOptions)
        .then((response=>{
            response.json().then(data=>{
                if(data.code===200){
                    console.log("success");
                }
                else{
                    alert("fail");
                }
            })
        }))
        .catch((error=>console.log('error', error)))
}

export function Register(params) {
    var axios = require('axios');
    var qs = require('qs');
    var data = qs.stringify(params);
    var config = {
        method: 'post',
        url: '/api/user/register',
        headers: {
            'Access-Control-Allow-Origin':'*', 
            'Access-Control-Allow-Credentials':'true',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        withCredentials: true,
        data: data
    };
    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
}

export function Reset(params) {
    var axios = require('axios');
    var qs = require('qs');
    var data = qs.stringify(params);
    var config = {
        method: 'post',
        //这里是重置的密码
        url: '/api/user/changePasswd',
        headers: {
            'Access-Control-Allow-Origin':'*', 
            'Access-Control-Allow-Credentials':'true',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        withCredentials: true,
        data: data
    };
    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
}