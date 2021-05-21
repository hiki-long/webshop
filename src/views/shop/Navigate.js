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
                        <Menu.Item key="itemList">
                            <Link to='/itemList'>商品列表</Link>   
                        </Menu.Item>
                    </Menu>
                
               {/* <Row>
                    <Col span={24}>
                        <nav className="NavbarItems" >
                            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                                {TopNavItems.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a className={item.cName} href={item.url}>
                                                {item.title}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                            <ul>
                                <Input.Search 
                                    style={{textAlign:"center", marginLeft:"280px"}}
                                    placeholder="请输入想要搜索的商品"
                                    allowClear
                                    enterButton="查找"
                                    size="large"/>
                            </ul>
                            <ul>
                                <Avatar style={{ backgroundColor: '#f56a00'}} size="large" icon={<UserOutlined />}>
                                    无法显示    
                                </Avatar>
                            </ul>
                            <ul>
                                <span>用户昵称</span>
                            </ul>
                        </nav>
                    </Col>
                </Row> */}
            </div>
        );
    }
}

export default Navigate;