import React from 'react';
import {Layout,  Menu} from 'antd';
import { Route } from 'react-router';
import UserBasicInfo from './UserBasicInfo';
import UserModifyInfo from './UserModifyInfo';
import { BrowserRouter, Link } from 'react-router-dom';
import LoginShow from '../login/LoginShow';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

//个人中心总布局
class UserPage extends React.Component {

    constructor(){
        super()
        this.state = {
            collapsed: false,
        };

    }
    
    toggle = () => {
    this.setState({
        collapsed: !this.state.collapsed,
    });
    };

    render() {
        return(
            <div>
                <BrowserRouter>
                 <Layout>
                    <Sider width={200} className="site-layout-background" style={{height:"900px"}}>
                        <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        >
                        <Menu.Item key="1">个人中心<Link to='/user' /></Menu.Item>
                        <Menu.Item key="2">修改个人信息<Link to='/userinfo' /></Menu.Item>
                        <Menu.Item key="3">查询账单</Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                        }}
                        >
                            <Route exact path="/user" component={UserBasicInfo} />
                            <Route path="/userinfo" component={UserModifyInfo} />
                        </Content>
                    </Layout>
                    </Layout>
                </BrowserRouter>
            </div>
        );
    }
}

export default UserPage;