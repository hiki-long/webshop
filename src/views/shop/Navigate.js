import React from 'react'
import { Button, Menu, message } from 'antd';
import './Navigate.css'
import { Link } from 'react-router-dom';
import { LogOut } from '../../api/account';
//顶部导航栏
class Navigate extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            haslogin: false,
            current:'main'
        };
        this.handleLogOut.bind(this);
        this.handleClick.bind(this);
        this.setStateAsync.bind(this);
    }

    async componentDidMount() {
        let requestOptions = {
            method: 'Get',
            redirect: 'follow',
            credentials: 'include',
            'Access-Control-Allow-Credentials':'true',
        }
        const data = fetch("http://localhost:8089/user/isLogin", requestOptions)
        .then((response) => {
            response.json().then(data=>{
                if(data.code===200){
                    this.setState({haslogin: true});
                } else {
                    this.setState({haslogin: false});
                }
            })
        })
    }

    
    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
          this.setState(state, resolve)
        });
    }

    async handleLogOut() {
        const result = await LogOut();
        console.log(result);
        message.info(result ? "注销成功" : "注销失败");
        if(result) {
            window.location.reload();
            window.location = 'http://localhost:3000/login'
        }
    }

    render() {
        const { current } = this.state;
        return(
            <div>
                {this.state.haslogin ? (
                    <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                        <Menu.Item key="/">
                            <Link to='/'>主页</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/user">用户中心</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/shoppingcart">购物车</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/manage">后台管理</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/visual">可视化</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Button type="primary" onClick={this.handleLogOut}>退出登录</Button>
                        </Menu.Item>
                    </Menu>
                ) : (
                    <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                        <Menu.Item key="/">
                            <Link to='/'>主页</Link>
                        </Menu.Item>
                        <Menu.Item key="login">
                            <Link to="/login">登录</Link>
                        </Menu.Item>
                    </Menu>
                )
                }
                {/* <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                    <Menu.Item key="/">
                        <Link to='/'>主页</Link>
                    </Menu.Item>
                    <Menu.Item key="login">
                        <Link to="/login">登录</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/user">用户中心</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/shoppingcart">购物车</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/manage">后台管理</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/visual">可视化</Link>
                    </Menu.Item>
                    <Menu.Item>
                    {
                        this.state.haslogin ?  <Button type="primary" onClick={this.handleLogOut}>退出登录</Button> : <></>
                    }
                    </Menu.Item>
                </Menu> */}
            </div>
        );
    }
}

export default Navigate;