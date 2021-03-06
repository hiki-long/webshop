import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Row, Col, Space} from 'antd';
import classnames from 'classnames';
import { BarsOutlined, ScheduleOutlined, UserOutlined } from '@ant-design/icons';
import './home.css';

class ManagerMainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count:{}
        }
    }

    componentDidMount() {
        //留空
        let requestOptions = {
            method: 'POST',
            redirect: 'follow',
            credentials: 'include',
            'Access-Control-Allow-Credentials':'true',
        };

        fetch("http://localhost:8089/user/countUser", requestOptions)
        .then((response=> {
            response.json().then(data=>{
                if(data.code===200){
                    // console.log(data.data);
                    this.setState({
                        userCount: data.data
                    });
                }
            })
        }))
        .catch((error=>console.log(error)));
        fetch("http://localhost:8089/order/countOrder", requestOptions)
        .then((response=> {
            response.json().then(data=>{
                if(data.code===200){
                    // console.log(data.data);
                    this.setState({
                        orderCount: data.data
                    });
                }
            })
        }))
        .catch((error=>console.log(error)));
        fetch("http://localhost:8089/item/countItem", requestOptions)
        .then((response=> {
            response.json().then(data=>{
                if(data.code===200){
                    // console.log(data.data);
                    this.setState({
                        productCount: data.data
                    });
                }
            })
        }))
        .catch((error=>console.log(error)));

    }


    render() {
        return (
            <div className='home' style={{marginLeft: "260px"}}>
                <Row gutter={16}>
                    <Col className="gutter-row" span={7} >
                        <div className={classnames({'color-box':true, 'brown':true, 'gutter-box':true})}>
                            <Link to='/user-index'>
                                <p style={{fontSize:"40px", height:"20px", lineHeight:"60px", color: "white"}}>{this.state.userCount}</p>
                                <p style={{fontSize:"18px"}}>
                                    <UserOutlined style={{marginLeft:"5px", fontSize:"40px", color: "white"}} />
                                    <span style={{fontSize:"50px", color: "white"}}>用户总数</span>
                                </p>
                            </Link>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={7}>
                        <div className={classnames({'color-box':true, 'green':true, 'gutter-box':true})}>
                            <Link to='/product-index' >
                                <p style={{fontSize:"40px", height:"20px", lineHeight:"60px", color: "white"}}>{this.state.productCount}</p>
                                <p style={{fontSize:"18px"}}>
                                    <BarsOutlined style={{marginLeft:"5px", fontSize:"40px", color: "white"}} />
                                    <span style={{fontSize:"50px", color: "white"}}>商品总数</span>
                                </p>
                            </Link>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={7}>
                        <div className={classnames({'color-box':true, 'blue':true, 'gutter-box':true})}>
                            <Link to='/order-index' >
                                <p style={{fontSize:"40px", height:"20px", lineHeight:"60px", color: "white"}}>{this.state.orderCount}</p>
                                <p style={{fontSize:"18px"}}>
                                    <ScheduleOutlined style={{marginLeft:"5px", fontSize:"40px", color: "white"}}/>
                                    <span style={{fontSize:"50px", color: "white"}}>订单总数</span>
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