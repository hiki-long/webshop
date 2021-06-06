import { message } from 'antd';
export async function GetCart() {
    //确认下url
    let requestOptions = {
        method:'GET',
        redirect: 'follow',
        credentials: 'include',
        'Access-Control-Allow-Credentials':'true',
    };
    
    const data = await fetch("http://localhost:8089/wishlist/listItem",requestOptions)
        .then((response=>{
            response.json().then(data=>{
                if(data.code===200){
                    message.info("获取购物车成功")
                    console.log(data.data)
                }
                else{
                    alert("fail");
                }
            })
        }))
        .catch((error=>console.log('error', error)))
    return data
}

export async function SubmitCart(params) {
    const wishlist=JSON.stringify(params.wishlist);
    let urlencoded = new URLSearchParams();
    urlencoded.append("wishlist", wishlist)
    let requestOptions = {
        method:'POST',
        redirect: 'follow',
        body: urlencoded,
        credentials: 'include',
        'Access-Control-Allow-Credentials':'true',
    };
    
    const data = await fetch("http://localhost:8089/wishlist/listItem",requestOptions)
        .then((response=>{
            response.json().then(data=>{
                if(data.code===200){
                    message.info("提交购物车成功")
                    console.log(data.data)
                }
                else{
                    alert("fail");
                }
            })
        }))
        .catch((error=>console.log('error', error)))
    return data
}

export async function SubmitOneCart(params) {
    const itemUUID = params.itemUUID;
    const number = params.number;
    let urlencoded = new URLSearchParams();
    urlencoded.append("itemUUID", itemUUID);
    urlencoded.append("number", number);
    let requestOptions = {
        method:'POST',
        redirect: 'follow',
        body: urlencoded,
        credentials: 'include',
        'Access-Control-Allow-Credentials':'true',
    };
    
    const data = await fetch("http://localhost:8089/wishlist/addWishlist",requestOptions)
        .then((response=>{
            response.json().then(data=>{
                if(data.code===200){
                    message.info("添加到购物车成功")
                    console.log(data.data)
                }
                else{
                    alert("fail");
                }
            })
        }))
        .catch((error=>console.log('error', error)))
    return data
}

export async function RemoveItemCart(params) {
    
}