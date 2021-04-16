import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './Login.css'

class Login extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {};
    // }

    render() {
        return (
            <div className="form-wrap">
                <div>
                    <div className="form-header">
                        <h4 className="column">登录</h4>
                        <span>账号注册</span>
                    </div>
                    <div className="form-content">
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}>
                            {/* 莫名奇妙的bug,没有换行符会出现两个input对不齐 */}
                            <br></br>
                            <Form.Item name="username" rules={[
                                    {
                                        required: true,
                                        message: '请在此输入你的邮箱!',
                                    },]}>
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="邮箱" />
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
                                <Input.Password prefix={<UserOutlined className="site-form-item-icon" />} placeholder="密码" />
                            </Form.Item>

                            <Form.Item name="remember"  valuePropName="checked">
                                <Checkbox>记住密码</Checkbox>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登录
                                </Button>
                                {/* <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> */}
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    注册
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
        </div>
        );
    }
}
export default Login;