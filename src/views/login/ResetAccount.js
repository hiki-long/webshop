import React from 'react';
import { Button, Form, Input, Row, Col} from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';
class ResetAccont extends React.Component {

    render() {
        return(
            <div className="form-wrap">
                <div>
                    <div className="form-header">
                        <div>找回密码</div>
                    </div>
                    <div className="form-content">
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}>
                            <Form.Item name="password" rules={[
                                    {
                                        required: true,
                                        message: '请在此输入你的密码!',
                                    },
                                    {
                                        pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/, message: "密码需要包含字母+数字，长度在6-20之间"
                                    },
                                ]}>
                                <Input.Password prefix={<UserOutlined className="site-form-item-icon" />} placeholder="密码"/>
                            </Form.Item>
                            <Form.Item name="password2" rules={[
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

                                    })
                                ]}>
                                <Input.Password prefix={<UserOutlined className="site-form-item-icon" />} placeholder="密码"/>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResetAccont;