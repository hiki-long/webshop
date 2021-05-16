import React from 'react';
import { Button, Form, Input, Row, Col, message} from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import { Footer } from 'antd/lib/layout/layout';
class FindAccount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            captchaLoading: false,
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onGetCaptcha = () => {
        this.setState({ captchaLoading: true });
        // 获取到父组件传过来的验证码发送接口
        // this.props.getCaptcha()
        //     .then(res => {
                if (true) {
                    // 开始倒计时
                    message.success('邮箱验证码已发送');
                    let count = 59;
                    this.setState({ count, captchaLoading: false });
                    this.interval = setInterval(() => {
                        count -= 1;
                        this.setState({ count });
                        if (count === 0) {
                            clearInterval(this.interval);
                        }
                    }, 1000);
                } else {
                    this.setState({ captchaLoading: false });
                }
            // })
    };
    render() {
        return (
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
                            <Form.Item name="email" rules={[
                                    {
                                        required: true,
                                        message: '请在此输入你的邮箱!',
                                    },
                                    {
                                        type: "email", message: "邮箱格式不正确"
                                    },
                                ]}>
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="邮箱"/>
                            </Form.Item>
                            <Form.Item>
                                <Row gutter={8}>
                                <Col span={12}>
                                    <Form.Item
                                    name="captcha"
                                    noStyle
                                    
                                    rules={[
                                        {
                                        required: true,
                                        message: 'Please input the captcha you got!',
                                        },
                                    ]}
                                    >
                                    <Input  prefix={<MailOutlined />} placeholder="请输入验证码"  />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    {this.state.count ? 
                                        <Button disabled>${this.state.count} s</Button> :
                                        <Button  onClick={this.onGetCaptcha}>获取验证码</Button>
                                    }
                                </Col>
                                </Row>
                                <Footer style={{height: "60px", backgroundColor: "darkgray"}}></Footer>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default FindAccount;