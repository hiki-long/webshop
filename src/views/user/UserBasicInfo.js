import React from 'react';
import {Image, Avatar, Button, Space, Col, Rate, List, Divider, Collapse } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { GetAllOrder } from '../../api/order';

const { Panel } = Collapse;
const data = [
    {
        uuid: "23048204",
        paid: true,
        time: 1623080815000, 
    },
    {
        uuid: "23048204",
        paid: true,
        time: 1623080815001, 
    }
];
//用户个人页面
class UserBasicInfo extends React.Component{
    
    onTest() {
        GetAllOrder();
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
                    <Collapse defaultActiveKey={['1']}>
                        <Panel header="订单xxx" key="1">
                            <List
                                style={{width: "90%", marginLeft: "5%"}}
                                bordered
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Image src={'http://image.uc.cn/s/wemedia/s/upload/2020/e3466f09e4bc2b32558be930245a2454.jpg'} width="50px" height="50px" preview={false} />}
                                            title={<div>商品xxx已发货</div>}
                                            description={<div>"发货时间" {d1}</div>}
                                        />
                                        <Space>
                                            {/* <Button onClick={this.onTest}>查看订单详情</Button> */}
                                            <div>数量*2</div>
                                            <div>价格 199</div>
                                            <Button type="primary">确认收货</Button>
                                        </Space>
                                    </List.Item>
                                )}
                                />
                        </Panel>
                        <Panel header="订单xxx" key="2">

                        </Panel>
                    </Collapse>
                </Col>
            </div>
        );
    }
}

export default UserBasicInfo;