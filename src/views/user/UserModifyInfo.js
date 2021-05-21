import React from 'react';
import { Form, Input, Select, Button, Space, DatePicker, Avatar, Upload, message, ImgCrop} from 'antd';
// import { UserOutlined,LoadingOutlined,PlusOutlined } from '@ant-design/icons';
import AvatarUpload from './AvatarUpload';
const { Option } = Select;
//修改用户信息个人页面
class UserModifyInfo extends React.Component{
    constructor(props) {
        super(props)
    }

    handelUpload = values => {
        console.log(values)
    }

    // 处理图片上传
    handleImageChange = ({ file, fileList }) => {

        this.setState({ fileList })
    }

    render() {
        return(
            <div>
                <Form name="complex-form" labelCol={{ span: 4 }} wrapperCol={{ span: 8 }} style={{textAlign:'left'}} onFinish={this.handelUpload}>
                    <Form.Item label="头像" name="avatar" >
                        <AvatarUpload onChange={this.handleImageChange}/>
                    </Form.Item>
                    <Form.Item label="用户昵称">
                        <Space>
                        <Form.Item
                            name="username"
                            noStyle
                            rules={[{ required: true, message: 'Username is required' }]}
                        >
                            <Input style={{ width: 160 }} placeholder="个人昵称" />
                        </Form.Item>
                        </Space>
                    </Form.Item>
                    <Form.Item label="地址">
                        <Input.Group compact>
                        <Form.Item
                            name={['address', 'province']}
                            noStyle
                            rules={[{ required: true, message: 'Province is required' }]}
                        >
                            <Select placeholder="省份">
                            <Option value="Beijing">北京市</Option>
                            <Option value="Shanghai">上海市</Option>
                            <Option value="Guangdong">广东省</Option>
                            <Option value="Shenzhen">河北省</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Select placeholder="市区">
                            <Option value="Beijing">北京市</Option>
                            <Option value="Shanghai">上海市</Option>
                            <Option value="Shenzhen">深圳市</Option>
                            <Option value="Shijiazhuang">石家庄</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name={['address', 'street']}
                            noStyle
                            rules={[{ required: true, message: '请输入详细地址' }]}
                        >
                            <Input style={{ width: '40%' }} placeholder="详情地址" />
                        </Form.Item>
                        </Input.Group>
                    </Form.Item>
                    <Form.Item label="出生日期" style={{ marginBottom: 0 }}>
                        <Form.Item
                        name="birthday"
                        rules={[{ required: true }]}
                        style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                        >
                        <DatePicker renderExtraFooter={() => 'extra footer'} />
                        </Form.Item>
                    </Form.Item>
                    <Form.Item label=" " colon={false}>
                        <Button type="primary" htmlType="submit">
                        保存修改
                        </Button>
                    </Form.Item>
                    </Form>
            </div>
        );
    }
}

export default UserModifyInfo;