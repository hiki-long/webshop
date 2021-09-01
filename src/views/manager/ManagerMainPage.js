import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Row, Col} from 'antd';
import { BarsOutlined, ScheduleOutlined, UserOutlined } from '@ant-design/icons';
import './home.less';

class ManagerMainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count:{}
        }
    }

    componentDidMount() {
        //留空
        let data = {
            userCount: 100,
            productCount: 100,
            orderCount: 100
        };
        this.setState({
            count: data
        });
    }


    render() {
        return (
            <div className='home' style={{marginLeft: "260px"}}>
                <Row gutter={16}>
                    <Col className="gutter-row" span={8} >
                        <div className="gutter-box" style={{backgroundColor: "#f0ad4e"}}>
                            <Link to='/user-index' className='color-box brown' >
                                <p className='count'>{this.state.count.userCount}</p>
                                <p className='desc'>
                                    <UserOutlined className='fa' />
                                    <span>用户总数</span>
                                </p>
                            </Link>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div className="gutter-box">
                            <Link to='/product-index' className='color-box green'>
                                <p className='count'>{this.state.count.productCount}</p>
                                <p className='desc'>
                                    <BarsOutlined className='fa' />
                                    <span>商品总数</span>
                                </p>
                            </Link>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div className="gutter-box">
                            <Link to='/order-index' className='color-box blue'>
                                <p className='count'>{this.state.count.orderCount}</p>
                                <p className='desc'>
                                    <ScheduleOutlined className='fa' />
                                    <span>订单总数</span>
                                </p>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ManagerMainPage;