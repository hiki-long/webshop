import { message } from 'antd';
import { convertLegacyProps } from 'antd/lib/button/button';
import { RemoveItemCart } from './cart';
export async function SubmitOrder(params, data2, props) {
    console.log(params);
    const orderlist = JSON.stringify(params);
    let urlencoded = new URLSearchParams();
    console.log(orderlist);
    urlencoded.append("orderlist", orderlist);
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
                if(data.code===200){
                    message.info("提交订单成功")
                    let result = data.data.split(",");
                    // console.log(result);
                    return result;
                }
                else{
                    alert("fail");
                }
            })
            .then(result=>{
                let params = [];
                for(var [key2, value2] of data2) {
                    params.push({uuid: key2})
                }
                RemoveItemCart(params);
                return result;
            }
            )
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