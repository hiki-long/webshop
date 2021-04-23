import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './Login.css'
import { Register } from "../../api/account";

class RegisterShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            password2: ""
        };
    }

    toggleForm = () => {
        // this.props.switchForm("login")
    };

    

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
        const sumbitInfo = {
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
        };
        Register(sumbitInfo);
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
                            onFinish={this.handleSubmit}
                            initialValues={{
                                remember: true,
                            }}>
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
                        </Form>
                    </div>
                </div>
        </div>
        );
    }
}
export default RegisterShow;