import axios from "axios"

const service = axios.create({
    baseURL: '/',
    timeout: 5000,
});

service.interceptors.request.use(function (config) {
    //在发送请求之前做什么
    return config;
}, function (error) {
    //对请求错误做什么
    return Promise.reject(error);
});

service.interceptors.response.use(function (response){
    //对响应数据做点什么
    return response;
}, function (error) {
    //对响应错误做点什么
    return Promise.reject(error);
})

export default service;