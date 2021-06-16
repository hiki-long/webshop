//上传商品信息
import { message } from 'antd';
export async function UploadGoad(params) {
    const name = params.name;
    const owner = params.owner;
    const remain = params.remain;
    const type = JSON.stringify(params.type);
    const onSale = params.onSale;
    const description = params.description;
    const price = params.price;
    const image = params.image;
    let urlencoded = new URLSearchParams();
    urlencoded.append("name", name);
    urlencoded.append("owner", owner);
    urlencoded.append("remain", remain);
    urlencoded.append("type", type);
    urlencoded.append("onSale", onSale);
    urlencoded.append("description", description);
    urlencoded.append("price", price);
    urlencoded.append("image", image);;

    let requestOptions = {
        method: 'POST',
        redirect: 'follow',
        body: urlencoded,
        credentials: 'include',
        'Access-Control-Allow-Credentials': 'true',
    }

    const data = await fetch("http://localhost:8089/item/addItem", requestOptions)
        .then((response=> {
            response.json().then(data=>{
                if(data.code===200){
                    message.info("上传商品成功");
                }
            })
        }))
        .catch((error=>console.log(error)))
    return data
}