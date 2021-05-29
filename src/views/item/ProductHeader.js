import { Space } from 'antd';
import React from 'react';
//商品基本价格信息
class ProductHeaer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            price: props.price
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            name: nextProps.name,
            price: nextProps.price
        })
    }

    render(){
        const { name, price}= this.state
        return(
            <div>
                <hgroup>
                <h1>{name}</h1>
                <h3 className="product-price">
                    <Space>
                        <span style={{marginRight: "20px", fontSize: "20px"}}>价格</span>
                        <span style={{fontSize: "28px",color: "red"}}>￥{price}</span>
                    </Space>
                </h3>
                </hgroup>
            </div>
        );
    }
}

export default ProductHeaer;