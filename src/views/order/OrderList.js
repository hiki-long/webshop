import React from 'react';
import { List, Image, Space, Button, Col, Row, Modal ,Spin, Alert, message} from 'antd';
import ShowPayment from './ShowPayment';
import { PayMoney, PayDone } from '../../api/paymoney';

class OrderList extends React.Component {
    
    constructor() {
        super();
        this.state = {
            isvisible: false, //弹窗是否可见
            paymentvisible: false,
            totalprice: 0,
            orderid: "",
        };
        this.onPaymentClick = this.onPaymentClick.bind(this);
        this.onPaymentDone = this.onPaymentDone.bind(this);
    }

    async componentDidMount() {
        console.log(this.props.history.location)
        this.setState({
            data: this.props.history.location.state.info,
            totalprice: this.props.history.location.state.price,
            orderid: this.props.history.location.state.orderid
        })
        
    }

    async onPaymentDone() {
        this.setState({
            paymentvisible: true,
        })
        // 等待2秒后跳转到成功页面
        message.info("购买成功！");
        const params = {
            uuid: this.state.orderid
        }
        let billid = await PayMoney(params).then(data=>{
            return data;
        })
        console.log(billid)
        setTimeout(function () {
            const params2 = {
                orderUUID: this.state.orderid,
                billUUID: billid
            };
            console.log(params2);
            PayDone(params2);
            // window.location = 'http://localhost:3000/shoppingcart';
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
                    <Col offset={6}>
                        <Space direction="horizontal" align="start" size={40}>
                            <div>订单号:{this.state.orderid}</div>
                            <div>收货地址:北京邮电大学</div>
                            <div>收货人:小明同学</div>
                            <div>状态:未付款</div>
                        </Space>
                    </Col>
                </Row>
                <List
                    itemLayout="horizontal"
                    dataSource={this.state.data}
                    renderItem={item => (
                    <List.Item style={{textAlign:"left", width:"80%", marginLeft:"10%"}}>
                        <List.Item.Meta
                        avatar={<Image src={item.image} preview={false} width={100}/>}
                        title={<span>{item.name}</span>}
                        description={<span>{item.owner}</span>}
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