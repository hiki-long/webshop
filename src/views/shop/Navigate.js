import React from 'react'
import { Col, Input, Row } from 'antd';
import TopNavItems from '../../model/TopNavItems'
import './Navigate.css'
import Avatar from 'antd/lib/avatar/avatar';
import { UserOutlined } from '@ant-design/icons';
//顶部导航栏
class Navigate extends React.Component{
    state = {
        clicked: false,
        haslogin: false,
    }
    
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <div>
                <Row>
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
                                <Input.Search 
                                    style={{textAlign:"center", marginLeft:"280px"}}
                                    placeholder="请输入想要搜索的商品"
                                    allowClear
                                    enterButton="查找"
                                    size="large"/>
                            </ul>
                            <Avatar style={{ backgroundColor: '#f56a00'}} size="large" icon={<UserOutlined />}>
                                无法显示    
                            </Avatar>
                            <span>用户昵称</span>
                        </nav>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Navigate;