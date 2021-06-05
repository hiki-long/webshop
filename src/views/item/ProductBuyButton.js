import { Button, Space } from 'antd';
import React from 'react';
import {ShoppingCartOutlined } from '@ant-design/icons';
//商品购买按钮
class ProductBuyButton extends React.Component{

    

    render(){
        return(
            <div>
                <Space>
                    <Button onClick={this.props.onPurchase}>立即购买</Button>
                    <Button icon={<ShoppingCartOutlined />} >加入购物车</Button>
                </Space>
            </div>
        );
    }
}

export default ProductBuyButton;