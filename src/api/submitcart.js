export function SubmitCart(params) {
    var axios = require('axios');
    var data = params
    var config = {
        method: 'get',
        url: '/api/wishlist/listItem',
        headers: {
            'Access-Control-Allow-Origin':'*', 
            'Access-Control-Allow-Credentials':'true',
            'Content-Type': 'application/form-data; charset=UTF-8',
        },
        withCredentials: true,
        data: data
    };
    axios(config)
    .then(function (response) {
        console.log(response.data);
        return response;
    })
    .catch(function (error) {
        console.log(error);
        return null
    })
}