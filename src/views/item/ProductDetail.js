import React from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
//商品详情介绍
class ProductDetail extends React.Component{
    callback(key) {
        console.log(key);
    }

    render(){
        return(
            <Tabs defaultActiveKey="1">
                <TabPane tab="商品介绍" key="1">
                这里是商品的简单介绍
                </TabPane>
                <TabPane tab="详情页" key="2">
                这里是商品的详细介绍
                </TabPane>
            </Tabs>
        );
    }
}

export default ProductDetail;