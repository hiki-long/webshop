import React from "react";
import { Form, Input, Button, Checkbox, Space, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './Login.css'
// import "antd/dist/antd.css";
import { HasLogin, Login } from "../../api/account";
//登录界面展示
class LoginShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    componentDidMount() {
        // HasLogin();
    }
    
    changeEmail = event => {
        this.setState({email: event.target.value})
    }

    changePassword = event => {
        this.setState({password: event.target.value});
    }

    handleSubmit = event => {
        
        const sumbitInfo = {
            email: this.state.email,
            passwd: this.state.password,
        };
        Login(sumbitInfo);
        
    }

    render() {
        return (
            <div className="form-wrap">
                <div>
                    <div className="form-header">
                        <h4 className="column">登录</h4>
                    </div>
                    <div className="form-content">
                        <Form
                            name="normal_login"
                            className="login-form"
                            onFinish={this.handleSubmit}
                            initialValues={{
                                remember: true,
                            }}>
                            <Space direction="vertical">
                            <Form.Item name="email" rules={[
                                    {
                                        required: true,
                                        message: '请在此输入你的邮箱!',
                                    },
                                    {
                                        type: "email", message: "邮箱格式不正确"
                                    },
                                ]}>
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="邮箱" onChange={this.changeEmail}/>
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: '请在此输入你的密码!',
                                    },
                                ]}
                            >
                                <Input.Password prefix={<UserOutlined className="site-form-item-icon" />} placeholder="密码" onChange={this.changePassword}/>
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember"  valuePropName="checked" className="remember">
                                    <Checkbox>记住密码</Checkbox>
                                </Form.Item>
                                <a className="login-form-forgot" href="/forget">
                                    忘记密码
                                </a>
                                <br/>
                                <Button type="primary" htmlType="submit" className="login-form-button" block>
                                    登录
                                </Button>
                                <br/>
                                <a href="/register">注册账号</a>
                            </Form.Item>
                            </Space>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
export default LoginShow;