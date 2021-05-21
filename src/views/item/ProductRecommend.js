import { Col, Divider, Row } from 'antd';
import React from 'react';
import OneItem from './OneItem';
//商品底层推荐物品
class ProductRecommend extends React.Component {

    render() {
        return(
            <div>
                <Divider horizontal><span>相关商品推荐</span></Divider>
                <Row>
                    <Col span={4} offset={4}>
                        <OneItem />
                    </Col>
                    <Col span={4}>
                        <OneItem />
                    </Col>
                    <Col span={4}>
                        <OneItem />
                    </Col>
                    <Col span={4}>
                        <OneItem />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ProductRecommend;