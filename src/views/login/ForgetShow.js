import React, { useRef } from 'react';
import { Steps, Button, message, Col, Row } from 'antd';
import FindAccount from './FindAccount';
import ResetAccont from './ResetAccount';
import "antd/dist/antd.css";
import { Reset } from '../../api/account';
const { Step } = Steps;
// const steps = [
//     {
//         title: '身份验证',
//         content: <FindAccount />,
//     },
//     {
//         title: '重置密码',
//         content: <ResetAccont />,
//     },
//     {
//         title: '完成',
//         content: <h1>重置密码成功！</h1>,
//     },
// ];

class ForgetShow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            current: 0,
        }
        this.formRef = React.createRef()
    }

    ResetPasswd(params) {
        console.log("发送重置密码")
        const data = {
            password: params
        };
        Reset(data);
    }

    Done() {
        message.success('重置完成，将返回主页!')
    }

    next = () => {
        if(this.state.current === 1) {
            // console.log(this.formRef.current.validateFields())
            //
            if (this.formRef.current.getFieldValue("password") === this.formRef.current.getFieldValue("password2") && this.formRef.current.getFieldValue("password") !== undefined && this.formRef.current.getFieldValue("password").length > 5) {
                this.ResetPasswd(this.formRef.current.getFieldValue("password"))
            }
            else
            {
                message.success('密码不符合要求!')
                return
            }
        }
        var temp = this.state.current
        this.setState({
            current: temp + 1
        })

    };

    prev = () => {
        var temp = this.state.current
        this.setState({
            current: temp - 1
        })
    };
    render() {
        let steps = [
            {
                title: '身份验证',
                content: <FindAccount />,
            },
            {
                title: '重置密码',
                content: <ResetAccont formRef={this.formRef} />,
            },
            {
                title: '完成',
                content: <h1>重置密码成功！</h1>,
            },
        ];
        return (
            <div style={{backgroundColor: "#DADED4"}}>
                <Row>
                    <Col span={18} offset={3}>
                        <Steps current={this.state.current}>
                            {
                                steps.map(item => (
                                <Step key={item.title} title={item.title} />
                                )
                            )
                            }
                        </Steps>
                    </Col>
                </Row>
                <Row justify="center" style={{height: "600px"}} align="middle">
                    <Col>
                        <div className="steps-content">{steps[this.state.current].content}</div>
                    </Col>
                </Row>
                <Row justify="center" style={{height: "290px"}} align="top">
                    <div className="steps-action" >
                        {this.state.current > 0 && (
                            <Button style={{ margin: '0 8px' }} onClick={this.prev}>
                                上一步
                            </Button>
                        )}
                        {this.state.current < steps.length - 1 && (
                            <Button type="primary" onClick={this.next}>
                                下一步
                            </Button>
                        )}
                        {this.state.current === steps.length - 1 && (
                            <Button type="primary" onClick={this.Done}>
                                完成
                            </Button>
                        )}
                    </div>
                </Row>
            </div>
        );
    }
}

export default ForgetShow;