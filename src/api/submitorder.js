export function SubmitOrder(params) {
    var axios = require('axios');
    var data = params
    var config = {
        method: 'get',
        url: '/api/order/addorder',
        headers: {
            'Access-Control-Allow-Origin':'*', 
            'Access-Control-Allow-Credentials':'true',
            'Content-Type': 'application/form-data; charset=UTF-8',
        },
        withCredentials: true,
        data: data
    };
    axios(config)
    .then(function (response){
        console.log(JSON.parse(response));
    })
    .catch(function (error) {
        console.log(error);
    })
}