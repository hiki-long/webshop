import React from "react";
import { Form, Input, Button, message, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './Login.css'
import { Register } from "../../api/account";
//注册界面展示
class RegisterShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            password2: ""
        };
    }

    changeUsername = event => {
        this.setState({username: event.target.value})
    }

    changeEmail = event => {
        this.setState({email: event.target.value})
    }

    changePassword = event => {
        this.setState({password: event.target.value});
    }

    changePassword2 = event => {
        this.setState({password2: event.target.value});
    }

    handleSubmit = event => {
        message.info("注册成功")
        const sumbitInfo = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        };
        Register(sumbitInfo);
    }

    render() {
        return (
            <div className="form-wrap">
                <div>
                    <div className="form-header">
                        <h4 className="column">账号注册</h4>
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
                            <Form.Item name="username" rules={[
                                {
                                    required: true,
                                    message: '请在此输入你的用户名',
                                },
                                {
                                    type: "string"
                                },
                            ]}>
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" onChange={this.changeUsername}/>
                            </Form.Item>
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
                                    {
                                        pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/, message: "密码需要包含字母+数字，长度在6-20之间"
                                    }
                                ]}
                            >
                                <Input.Password prefix={<UserOutlined className="site-form-item-icon" />} placeholder="密码" onChange={this.changePassword} />
                            </Form.Item>
                            <Form.Item
                                name="password2"
                                rules={[
                                    {
                                        required: true,
                                        message: '请在此重复你的密码!',
                                    },
                                    ({getFieldValue}) => ({
                                        validator(rule, value) {
                                            if(getFieldValue('password') === value)
                                            {
                                                return Promise.resolve();
                                            }
                                            else
                                            {
                                                return Promise.reject("两次密码不一致");
                                            }
                                        }

                                    }),
                                ]}
                            >
                                <Input.Password prefix={<UserOutlined className="site-form-item-icon" />} placeholder="再次输入" onChange={this.changePassword2} />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button" block>
                                    注册
                                </Button>
                            </Form.Item>
                            </Space>
                        </Form>
                    </div>
                </div>
        </div>
        );
    }
}
export default RegisterShow;