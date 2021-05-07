import React from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

class ProductDetail extends React.Component{
    callback(key) {
        console.log(key);
    }

    render(){
        return(
            <Tabs defaultActiveKey="1">
                <TabPane tab="商品介绍" key="1">
                Content of Tab Pane 1
                </TabPane>
                <TabPane tab="详情页" key="2">
                Content of Tab Pane 2
                </TabPane>
            </Tabs>
        );
    }
}

export default ProductDetail;