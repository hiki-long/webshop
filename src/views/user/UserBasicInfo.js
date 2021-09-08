import React from 'react';
import {Image, Avatar, Button, Space, Col, Rate, List, Divider, Collapse } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { GetAllOrder } from '../../api/order';

const { Panel } = Collapse;
// const data = [
//     {
//         uuid: "23048204",
//         paid: true,
//         time: 1623080815000, 
//     },
//     {
//         uuid: "23048204",
//         paid: true,
//         time: 1623080815001, 
//     }
// ];
function JsonToList(str) {
    // console.log(str);
    var res = [];
    var parsedJSON = JSON.parse(str);
    console.log(parsedJSON);
    for(var i=0; i<parsedJSON.length;i++) {
        res.push({
            uuid: parsedJSON[i].itemUUID,
            number: parsedJSON[i].number,
            name: parsedJSON[i].name,
            owner: parsedJSON[i].owner,
            price: parsedJSON[i].totalPrice,
            url: JSON.parse(parsedJSON[i].url)[0]
        });
    }
    console.log(res);
    return res;
}

//用户个人页面
class UserBasicInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            orderlist: [],
            ordermap: new Map()
        };
    }

    async componentDidMount() {       
        const res = await GetAllOrder().then(data2=>{
            return data2.list;
        }
        );
        // console.log(res);
        if(res !== undefined) {
            this.setState({
                orderlist: res
            });
            // console.log(this.state.orderlist);
        }
    }

    

    render(){
        var date = new Date();
        var d1 = date.toLocaleString();
        return(
            <div>
                <Col>
                    <Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }} size="large" gap={2} icon={<UserOutlined />}>
                        无法显示    
                    </Avatar>
                    <Space size={40}>
                        <span>用户昵称</span>
                        <div>
                            <span>用户评价</span>
                            <Rate disabled defaultValue={4} />
                        </div>
                    </Space>
                </Col>
                <Col>
                    <Space>
                        <Button>待付款</Button>
                        <Button>待发货</Button>
                        <Button>待收货</Button>
                        <Button>待评价</Button>
                    </Space>
                </Col>
                <Col>
                    <Divider orientation="left" style={{width: "70%", marginLeft: "5%", marginRight: "5%"}}>我的物流</Divider>
                    <Collapse>
                        {
                            this.state.orderlist.length > 0 ?
                            this.state.orderlist.map(item=>(
                                <Panel header={"订单" + item.uuid} key={item.uuid}>
                                    {/* 这里item是一个订单的信息,购买信息在item.items里,是字符串 */}
                                    <List
                                        style={{width: "90%", marginLeft: "5%"}}
                                        bordered
                                        dataSource={JsonToList(item.items)}
                                        renderItem={item2 => (
                                            <List.Item>
                                                <List.Item.Meta
                                                    avatar={<Image src={item2.url} width="50px" height="50px" preview={false} />}
                                                    title={<div>商品{item2.name}已发货</div>}
                                                    description={<div>发货时间 {d1}</div>}
                                                />
                                                <Space>
                                                    {/* <Button onClick={this.onTest}>查看订单详情</Button> */}
                                                    <div>数量*{item2.number}</div>
                                                    <div>价格{item2.price}</div>
                                                    <Button type="primary">确认收货</Button>
                                                </Space>
                                            </List.Item>
                                        )}
                                        />
                                </Panel>
                            )) :
                            <></>
                        }
                        
                    </Collapse>
                </Col>
            </div>
        );
    }
}

export default UserBasicInfo;