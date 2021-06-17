import React from 'react';
import {Card,Col} from 'antd';
const {Meta} = Card;


class ItemCard extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            image:props.image,
            name:props.name,
            price:props.price,
            uuid:props.uuid,
        }
    }
    render() {
        const {uuid,image, name, price} = this.state;
        const localimage = "http://localhost:8089/mystatic/" + image;
        // console.log(localimage);
        return (
                <Card
                    hoverable
                    cover={
                    image.startsWith('http') ? <img src={image} alt="图片不存在"></img> :
                    <img src={localimage} alt="图片不存在"></img>
                }
                >
                    <Meta title={name} description={"¥"+price}/>
                </Card>
        )
    }
}
export default ItemCard;