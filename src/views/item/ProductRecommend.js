import { Divider, Row } from 'antd';
import React from 'react';
import OneItem from './OneItem';
//商品底层推荐物品
class ProductRecommend extends React.Component {

    render() {
        return(
            <div>
                <Divider horizontal><span>相关商品推荐</span></Divider>
                <Row>
                    <OneItem />
                    <OneItem />
                    <OneItem />
                    <OneItem />
                </Row>
            </div>
        );
    }
}

export default ProductRecommend;