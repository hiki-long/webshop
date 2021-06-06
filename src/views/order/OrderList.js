import React from 'react';
import { List, Image, Space, Button, Col, Row, Modal ,Spin, Alert, message} from 'antd';
import ShowPayment from './ShowPayment';

const data = [
  {
    uuid: '1',
    title: '商品名',
    storename: '店铺名',
    number: 2,
    price: 100,
  },
  {
    uuid: '2',
    title: '商品名',
    storename: '店铺名',
    number: 1,
    price: 100,
  },
  {
    uuid: '3',
    title: '商品名',
    storename: '店铺名',
    number: 1,
    price: 100,
  },
  {
    uuid: '4',
    title: '商品名',
    storename: '店铺名',
    number: 1,
    price: 100,
  },
];

class OrderList extends React.Component {
    
    constructor() {
        super();
        this.state = {
            isvisible: false, //弹窗是否可见
            paymentvisible: false,
            totalprice: 0,
        };
        this.onPaymentClick = this.onPaymentClick.bind(this);
        this.onPaymentDone = this.onPaymentDone.bind(this);
    }

    // async componentDidMount() {
    //     let requestOptions = {
    //         method: 'Get',
    //         redirect: 'follow',
    //         credentials: 'include',
    //         'Access-Control-Allow-Credentials': 'true',
    //     }
    //     const data = await fetch("http://localhost:8089/order/addorder")
    //                     .then((response) => {
    //                         return response.json().then(data => {
    //                             console.log("response json = " + JSON.parse(data))
    //                             if(data.code === 200) {
    //                                 return data.data;
    //                             }
    //                         })
    //                     })
    //                     .catch(error => console.log('error', error));
    //                     this.setState({
    //                         items:JSON.parse(data)
    //                     })
        
    // }

    onPaymentDone() {
        this.setState({
            paymentvisible: true,
        })
        // 等待2秒后跳转到成功页面
        message.info("购买成功！");
        setTimeout(function () {
            window.location = 'http://localhost:3000/shoppingcart';
        }, 2000);
    }

    onPaymentClick() {
        this.setState({
            isvisible: true,
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
                            <div>状态:未付款</div>
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
                        <Space direction="vertical" size={10} style={{marginLeft: "800px"}}>
                            <Row>
                                <div>数量：{item.number}</div>
                            </Row>
                            <Row>
                                <div>总价：{item.price*item.number}</div>
                            </Row>
                        </Space>
                    </List.Item>
                    )}
                />
                <div style={{textAlign:"right", marginRight:"10%", color:"red"}}>总计：¥{this.state.totalprice}元</div>
                <Space>
                    <Button onClick={this.goBackShoppingCart}>返回购物车</Button>
                    <Button type="primary" onClick={this.onPaymentClick}>确认付款</Button>
                </Space>
                <Modal title="支付界面" visible={this.state.isvisible} footer={<Button type={'primary'} onClick={this.onPaymentDone}>已完成支付</Button>} size={300} onCancel={() =>  this.setState({isvisible: false})}>
                    <Row textAlign="center">
                        <Col offset={4}>
                            <ShowPayment />
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={8}>
                            {
                                this.state.paymentvisible ? 
                                <Spin isvisible={this.state.paymentvisible}>
                                    <Alert
                                        description="正在核对支付信息"
                                        type="info"
                                    />
                                </Spin> : <div></div>
                            }
                        </Col>
                    </Row>
                </Modal>
            </div>
        );
    }
}

export default OrderList;