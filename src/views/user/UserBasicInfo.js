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
            var temp = new Map();
            for(var index in res) {
                var temp2 = this.JsonToList.bind(this, res[index].items);
                temp.set(res[index].items, temp2);
            }
            this.setState({
                ordermap: temp
            })
            console.log(this.state.ordermap);
        }
    }

    JsonToList(str) {
        console.log(str);
        var res = [];
        var parsedJSON = JSON.parse(str);
        console.log(parsedJSON);
        for(var i=0; i<parsedJSON.length;i++) {
            res.push({
                uuid: parsedJSON[i].itemUUID,
                number: parsedJSON[i].number
            });
        }
        console.log(res);
        return res;
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
                                    <List
                                        style={{width: "90%", marginLeft: "5%"}}
                                        bordered
                                        dataSource={this.JsonToList.bind(this,item.items)}
                                        renderItem={item2 => (
                                            <p>"yes"</p>

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