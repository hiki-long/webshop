import React from 'react';
import { Image, Row, Col, Space, Pagination, Card } from 'antd';
import { Label } from 'semantic-ui-react';
import ProductImage from './ProductImage';
import ProductHeaer from './ProductHeader';
import ProductSelect from './ProductSelect';
import ProductNumber from './ProductNumber';
import ProductBuyButton from './ProductBuyButton';
//商品详情页面
class OneItemInfo extends React.Component{
    render(){
        return (
            <Row justify="start">
                <Col offset={4}>
                    <ProductImage ImageList={['http://image.uc.cn/s/wemedia/s/upload/2020/e3466f09e4bc2b32558be930245a2454.jpg']}/>
                </Col>
                <Col offset={4} style={{textAlign: 'left'}} >
                    <Space direction="vertical" size={40}>
                        <ProductHeaer name="商品名" price={100}/>
                        <ProductSelect />
                        <ProductNumber buynum={1}/>
                        <ProductBuyButton />
                    </Space>
                </Col>
            </Row>
        );
    }
}

export default OneItemInfo;