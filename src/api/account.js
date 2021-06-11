import { message } from 'antd';

//登录和注册接口
export async function HasLogin() {
    let requestOptions = {
        method: 'POST',
        redirect: 'follow',
        credentials: 'include',
        'Access-Control-Allow-Credentials':'true',
    }
    const data = await fetch("http://localhost:8089/user/login", requestOptions)
        .then((response) => {
            response.json().then(data=>{
                if(data.code===401){
                    message.info("您已登陆，即将返回主页面")
                    window.location = 'http://localhost:3000'
                }
            })
        })
        .catch((error)=>console.log(error))
}

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
                    message.info("登陆成功")
                    console.log("success");
                    window.location = 'http://localhost:3000'
                }
                else{
                    alert("fail");
                }
            })
        }))
        .catch((error=>console.log('error', error)))
    return data
}

export async function Register(params) {
    const username = params.username;
    const email = params.email;
    const password = params.password;
    let urlencoded = new URLSearchParams();
    urlencoded.append("username", username);
    urlencoded.append("email", email);
    urlencoded.append("password", password);
    let requestOptions = {
        method: 'POST',
        redirect: 'follow',
        body: urlencoded,
        credentials: 'include',
        'Access-Control-Allow-Credentials': 'true',
    }

    const data = await fetch("http://localhost:8089/user/register", requestOptions)
        .then((response=> {
            response.json().then(data=>{
                if(data.code===200){
                    message.info("注册成功");
                    window.location = 'http://localhost:3000';
                }
            })
        }))
        .catch((error=>console.log(error)))
    return data
}

export async function Reset(params) {
    const email = params.email;
    const newpassword = params.newpassword;
    let urlencoded = new URLSearchParams();
    urlencoded.append("email", email);
    urlencoded.append("passwd","")
    urlencoded.append("newpasswd", newpassword);
    let requestOptions = {
        method: 'POST',
        redirect: 'follow',
        body: urlencoded,
        credentials: 'include',
        'Access-Control-Allow-Credentials': 'true',
    }

    const data = await fetch("http://localhost:8089/user/changePasswd", requestOptions)
        .then((response=> {
            response.json().then(data=>{
                if(data.code===200){
                    message.info("修改成功");
                    window.location = 'http://localhost:3000/login';
                }
            })
        }))
        .catch((error=>console.log(error)))
    return data
}