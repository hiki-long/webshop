import { message } from 'antd';
export async function PayMoney(params) {
    const uuid = params.uuid;
    let urlencoded = new URLSearchParams();
    urlencoded.append("uuid", uuid);
    let requestOptions = {
        method:'POST',
        redirect: 'follow',
        body: urlencoded,
        credentials: 'include',
        'Access-Control-Allow-Credentials':'true',
    };
    
    const data =await fetch("http://localhost:8089/bill/createBill",requestOptions)
        .then((response=>{   
            return response.json().then(data=>{
                if(data.code===200){
                    message.info("支付单号生成成功")
                    console.log(data.data);
                    return data.data;
                    // window.location = "http://localhost:3000/shoppingcart"
                }
                else{
                    alert("fail");
                }
            })
        }))
        .catch((error=>console.log('error', error)))
        return data;
}

export async function PayDone(params) {
    const orderUUID = params.orderUUID;
    const billUUID = params.billUUID;
    let urlencoded = new URLSearchParams();
    urlencoded.append("orderUUID", orderUUID);
    urlencoded.append("billUUID", billUUID)
    let requestOptions = {
        method:'POST',
        redirect: 'follow',
        body: urlencoded,
        credentials: 'include',
        'Access-Control-Allow-Credentials':'true',
    };
    
    const data = fetch("http://localhost:8089/order/setBill",requestOptions)
        .then((response=>{   
            response.json().then(data=>{
                if(data.code===200){
                    message.info("支付单号提交成功");
                    // window.location = "http://localhost:3000/shoppingcart"
                }
                else{
                    alert("fail");
                }
            })
        }))
        .catch((error=>console.log('error', error)))
}