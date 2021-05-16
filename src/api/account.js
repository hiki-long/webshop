import { setCookie } from './storeage';

//登录和注册接口
export function Login(params){
    var axios = require('axios');
    var qs = require('qs');
    var data = qs.stringify(params);
    var config = {
        method: 'post',
        url: '/api/user/login',
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
        // console.log(JSON.stringify(response.data));
        var uuid = JSON.parse(response.data.data).uuid;
        console.log("uuid="+uuid);
        setCookie("uuid",uuid);
    })
    .catch(function (error) {
        console.log(error);
    });
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
        url: '/api/user/reset',
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