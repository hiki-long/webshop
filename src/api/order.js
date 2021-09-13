import { message } from 'antd';
import { convertLegacyProps } from 'antd/lib/button/button';
import { RemoveItemCart } from './cart';
export async function GetAllOrder() {
    //确认下url
    let requestOptions = {
        method:'GET',
        redirect: 'follow',
        credentials: 'include',
        'Access-Control-Allow-Credentials':'true',
    };
    
    const data = await fetch("http://localhost:8089/order/listOrderByUser",requestOptions)
        .then((response=>{
            return response.json().then(data=>{
                if(data.code===200){
                    message.info("获取所有订单成功")
                    // console.log(data.data);
                    return data.data;
                }
                else{
                    alert("fail");
                }
            })
        }))
        .catch((error=>console.log('error', error)))
    return data
}

export async function SubmitOrder(params, data2, props, isDirectBuy) {
    console.log(params);
    const orderlist = JSON.stringify(params);
    let params2 = [];
    for(var [key2, value2] of data2) {
        params2.push({'uuid': key2, 'number': value2.number})
    }
    const wishlist = JSON.stringify(params2);
    console.log(wishlist);
    //这里加一个wishlist
    let urlencoded = new URLSearchParams();
    console.log(orderlist);
    urlencoded.append("orderlist", orderlist);
    urlencoded.append("wishlist", wishlist);
    urlencoded.append("isDirect", isDirectBuy);
    let requestOptions = {
        method:'POST',
        redirect: 'follow',
        body:urlencoded,
        credentials: 'include',
        'Access-Control-Allow-Credentials':'true',
    };
    
    const data = fetch("http://localhost:8089/order/createOrder",requestOptions)
        .then((response=>{   
            response.json().then(data=>{
                console.log(data);
                if(data.code===200){
                    message.info("提交订单成功")
                    let result = data.data.split(",");
                    // console.log(result);
                    return result;
                }
                else{
                    alert('购买失败');
                    return new Promise((resolve, reject) => {});
                }
            })
            // .then(result=>{
            //     if(isDirectBuy) {
                    // let params = [];
                    // for(var [key2, value2] of data2) {
                    //     params.push({uuid: key2})
                    // }
                    // RemoveItemCart(params);
            //     }
            //     return result;
            // }
            // )
            .then(result=>{
                let params2 = [];
                for(var [key2, value2] of data2) {
                    const temp = {
                        itemUUID: key2,
                        number: value2.number,
                        owner: value2.owner,
                        name: value2.name,
                        price: value2.price,
                        image: value2.image
                    }
                    params2.push(temp);
                }
                console.log(params2);
                props.history.push({
                pathname:'../order',
                state:{
                    'info': params2,
                    'orderid': result[0],
                    'price': result[1]
                }
                });
            }
            )
        }))
        .catch((error=>console.log('error', error)))
}