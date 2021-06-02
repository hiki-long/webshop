import React from 'react';
import { List, Image, Space, Button, Col, Row, Modal } from 'antd';
import ShowPayment from './ShowPayment';

const data = [
  {
    title: '商品名',
    storename: '店铺名',
  },
  {
    title: '商品名',
    storename: '店铺名',
  },
  {
    title: '商品名',
    storename: '店铺名',
  },
  {
    title: '商品名',
    storename: '店铺名',
  },
];

class OrderList extends React.Component {
    
    constructor() {
        super();
        this.state = {
            isvisible: false, //弹窗是否可见
        };
        this.onPaymentClick = this.onPaymentClick.bind(this);
    }

    onPaymentClick() {
        this.setState({
            isvisible: true
        })
    }

    goBackShoppingCart() {
        window.location = 'http://localhost:3000/shoppingcart'
    }

    render() {
        return(
            <div>
                <h1>查看订单页面</h1>
                <Row>
                    <Col offset={9}>
                        <Space direction="horizontal" align="start" size={40}>
                            <div>订单号:6666666</div>
                            <div>收货地址:北京邮电大学</div>
                            <div>收货人:野兽前辈</div>
                        </Space>
                    </Col>
                </Row>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                    <List.Item style={{textAlign:"left", width:"80%", marginLeft:"10%"}}>
                        <List.Item.Meta
                        avatar={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" width={100}/>}
                        title={<a href="https://ant.design">{item.title}</a>}
                        description={<span>{item.storename}</span>}
                        />
                        <Space>
                            <div>数量：</div>
                            <div>总价：</div>
                        </Space>
                    </List.Item>
                    )}
                />
                <div style={{textAlign:"right", marginRight:"11%", color:"red"}}>总计： 元</div>
                <Space>
                    <Button onClick={this.goBackShoppingCart}>返回购物车</Button>
                    <Button type="primary" onClick={this.onPaymentClick}>确认付款</Button>
                </Space>
                <Modal title="支付界面" visible={this.state.isvisible} footer={[]} size={300} onCancel={() =>  this.setState({isvisible: false})}>
                    <Row textAlign="center">
                        <Col offset={4}>
                            <ShowPayment />
                        </Col>
                    </Row>
                </Modal>
            </div>
        );
    }
}

export default OrderList;