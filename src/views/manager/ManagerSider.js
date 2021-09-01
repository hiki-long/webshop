/**
 * 侧边导航
 */
 import React from 'react'
 import { Link } from 'react-router-dom'
 import { Layout, Menu} from 'antd'
 import {UserOutlined, AppstoreOutlined} from '@ant-design/icons';
 import './sider.less'
 
 const { Sider } = Layout;
 const SubMenu = Menu.SubMenu;
 
 class ManagerSider extends React.Component {
 
     rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];
     state = {
         openKeys: ['sub1', 'sub2', 'sub3', 'sub4'],
     };
     onOpenChange = (openKeys) => {
         const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
         if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
             this.setState({openKeys});
         } else {
             this.setState({
                 openKeys: latestOpenKey ? [latestOpenKey] : [],
             });
         }
     }
 
     render () {
 
         return (
            <Sider
                trigger={null}
                collapsible
                collapsed={this.props.collapsed}
                width={260}
                className='sider'
                theme="dark"
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                  }}
            >
                <div>
                    <Menu theme="dark"
                        mode="inline"
                        openKeys={this.state.openKeys}
                        onOpenChange={this.onOpenChange}
                        defaultSelectedKeys={['/manage']}
                        selectedKeys={[this.props.selectKey]}
                    >
                        <Menu.Item key='/manage'>
                            <Link to='/manage'>
                                <UserOutlined />
                                <span>首页</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu key="sub2" title={<span><AppstoreOutlined /><span>商品</span></span>}>
                            <Menu.Item key="/product-index">
                                <Link to='/product-index'>
                                    <span>商品管理</span>
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><AppstoreOutlined /><span>订单</span></span>}>
                            <Menu.Item key="/order-index">
                                <Link to='/order-index'>
                                    <span>订单管理</span>
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span><AppstoreOutlined /><span>用户</span></span>}>
                            <Menu.Item key="/user-index">
                                <Link to='/user-index'>
                                    <span>用户管理</span>
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            </Sider>
         )
     }
 }
 
 export default ManagerSider;