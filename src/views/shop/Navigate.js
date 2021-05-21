import React from 'react'
import { Col, Input, Row,Menu } from 'antd';
import TopNavItems from '../../model/TopNavItems'
import './Navigate.css'
import Avatar from 'antd/lib/avatar/avatar';
import { UserOutlined } from '@ant-design/icons';
import { BrowserRouter, Link,Route } from 'react-router-dom';
import ItemList from"../itemlist/ItemList";
//顶部导航栏
class Navigate extends React.Component{
    state = {
        clicked: false,
        haslogin: false,
        current:'main'
    }
    
    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });

    }

    render() {
        const { current } = this.state;
        return(
            <div>
                    <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                        <Menu.Item key="/">
                            <Link to='/'>主页</Link>
                        </Menu.Item>
                        <Menu.Item key="login">
                            <Link to="/login">登录</Link>
                        </Menu.Item>
                        <Menu.Item key="itemUpload">
                            <Link to="/itemUpload">商品上传页</Link>    
                        </Menu.Item>
                        <Menu.Item key="itemList">
                            <Link to="/itemList">商品列表</Link>   
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/user">用户中心</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/forget">忘记密码</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/test">测试页面</Link>
                        </Menu.Item>
                    </Menu>
            </div>
        );
    }
}

export default Navigate;