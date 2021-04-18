import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './Login.css'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    toggleForm = () => {
        this.props.switchForm("login")
    }

    render() {
        return (
            <div className="form-wrap">
                <div>
                    <div className="form-header">
                        <h4 className="column">账号注册</h4>
                        <span onClick={this.toggleForm}>登录</span>
                    </div>
                    <div className="form-content">
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}>
                            {/* 莫名奇妙的bug,没有换行符会出现两个input对不齐 */}
                            {/* <br></br> */}
                            <Form.Item name="username" rules={[
                                    {
                                        required: true,
                                        message: '请在此输入你的邮箱!',
                                    },
                                    {
                                        type: "email", message: "邮箱格式不正确"
                                    },
                                ]}>
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="邮箱" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: '请在此输入你的密码!',
                                    },
                                    // {
                                    //     min:6, message: "密码不能小于6位"
                                    // },
                                    // {
                                    //     max:20, message: "密码不能大于20位"
                                    // },
                                    {
                                        pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/, message: "密码需要包含字母+数字，长度在6-20之间"
                                    }
                                ]}
                            >
                                <Input.Password prefix={<UserOutlined className="site-form-item-icon" />} placeholder="密码" />
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
                                <Input.Password prefix={<UserOutlined className="site-form-item-icon" />} placeholder="再次输入" />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button" block>
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
export default Register;