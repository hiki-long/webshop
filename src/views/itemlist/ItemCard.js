import React from 'react';
import {Card,Col} from 'antd';
const {Meta} = Card;


class ItemCard extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            image:props.image,
            name:props.name,
            price:props.price,
            key:props.key,
        }
    }
    render() {
        const {key,image, name, price} = this.state
        return (
                <Card
                    hoverable
                    cover={<img src={image}></img>}
                >
                    <Meta title={name} description={"$"+price}/>
                </Card>
        )
    }
}
export default ItemCard;