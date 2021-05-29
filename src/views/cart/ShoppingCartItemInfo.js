import { Card, Row, Image } from 'antd';
import React from 'react';

class ShoppingCartItemInfo extends React.Component{

    render() {
        return(
            <div>
                <Row>
                    <Image src={'http://image.uc.cn/s/wemedia/s/upload/2020/e3466f09e4bc2b32558be930245a2454.jpg'} style={{height:'100px',width:'100px'}}/>
                    <div style={{alignSelf:"center"}}>商品名称</div>
                </Row>
            </div>
        );
    }
}

export default ShoppingCartItemInfo;