import React from 'react';
import { Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Footer } from 'antd/lib/layout/layout';
class ResetAccont extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pw: "",
            pw2: "",
            formRef: props.formRef
        };
    }

    HandlerPw2 = event => {
        this.setState({
            pw2: event.target.value
        })
    }
    
    HandlerPw = event => {
        this.setState({
            pw: event.target.value
        })
    }

    

    render() {
        return(
            <div className="form-wrap">
                <div>
                    <div className="form-header">
                        <div>重置密码</div>
                    </div>
                    <div className="form-content">
                        <Form
                            name="normal_login"
                            className="login-form"
                            ref={this.state.formRef}
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
                                <Input.Password name="pw" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="密码" onChange={this.HandlerPw} />
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
                                <Input.Password name="pw2" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="密码" onChange={this.HandlerPw2} />
                            </Form.Item>
                            <Footer style={{height: "20px", backgroundColor: "darkgray"}}></Footer>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResetAccont;