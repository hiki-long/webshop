import { Space } from 'antd';
import React from 'react';

class ProductHeaer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            price: props.price
        }
    }

    render(){
        return(
            <div>
                <hgroup>
                <h1>{this.state.name}</h1>
                <h3 className="product-price">
                    <Space>
                        <span style={{marginRight: "20px", fontSize: "20px"}}>价格</span>
                        <span style={{fontSize: "28px",color: "red"}}>￥{this.state.price}</span>
                    </Space>
                </h3>
                </hgroup>
            </div>
        );
    }
}

export default ProductHeaer;