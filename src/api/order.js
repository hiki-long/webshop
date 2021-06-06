import { message } from 'antd';
export async function SubmitOrder(params) {
    const orderlist = params;
    let urlencoded = new URLSearchParams();
    console.log(params);
    urlencoded.append("orderlist", orderlist);
    console.log(urlencoded)
    let requestOptions = {
        method:'POST',
        redirect: 'follow',
        body:urlencoded,
        credentials: 'include',
        'Access-Control-Allow-Credentials':'true',
    };
    
    const data = await fetch("http://localhost:8089/order/addorder",requestOptions)
        .then((response=>{
            response.json().then(data=>{
                if(data.code===200){
                    message.info("提交订单成功")
                    console.log("提交订单成功");
                }
                else{
                    alert("fail");
                }
            })
        }))
        .catch((error=>console.log('error', error)))
    return data
}