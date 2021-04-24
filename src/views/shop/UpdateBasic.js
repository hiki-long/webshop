import React, { useState } from 'react';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import {
  Col,
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Upload,
} from 'antd';
import { InputGroup } from 'react-bootstrap';
const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
class UpdateBasic extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render(){
        return(
        <div className="upload-body">
            <h2>商品上传页面</h2>
            <Form
            labelCol={{
              span: 10,
            }}
            wrapperCol={{
              span: 4,
            }}
            layout="horizontal"
          >
            <Form.Item label="卖方ID">
              <Input />
            </Form.Item>
            <Form.Item label="产品情况">
              <Select>
                <Select.Option value="demo">新上架</Select.Option>
                <Select.Option value="demo">已有</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="商品名">
                <Input />
            </Form.Item>
            <Form.Item label="商品类别"
                wrapperCol={{
                    span:1,
                }}
            >
                <Select defaultValue="请选择" style={{ width: 120 }} allowClear onChange={this.handleChange}>
                    <Select.Option value="jack">衣服</Select.Option>
                    <Select.Option value="jack">食品</Select.Option>
                    <Select.Option value="jack">电器</Select.Option>
                    <Select.Option value="jack">家具</Select.Option>
                    <Select.Option value="jack">器械</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="价格"
                wrapperCol={{
                    span:1,
                }}
            >
                <InputNumber
                    defaultValue={1000}
                    formatter={value => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                />
            </Form.Item>
            {/* 库存这里对不齐我不知道怎么调整布局，交给牛晓磊 */}
            <Form.Item label="库存"
                wrapperCol={{
                    span:2,
                }}
            >
                <Form.Item name="input-number" noStyle>
                    <InputNumber min={0} max={100000} />
                </Form.Item>
                <span className="ant-form-text">件</span>
                
            </Form.Item>
            <Form.Item label="是否在售"
                wrapperCol={{
                    span:1,
                }}>
                <Switch />
            </Form.Item>
            <Form.Item name="upload" label="商品图片" valuePropName="fileList" getValueFromEvent={normFile}
                >
                <Upload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>上传图片</Button>
                </Upload>
            </Form.Item>
            <Form.Item name={['user','introduction']} label="商品描述">
                <Input.TextArea showCount maxLength={250}/>
            </Form.Item>
            <Form.Item 
                wrapperCol={{
                    span:12,
                    offset:6,
                }}>
                <Button type="primary" htmlType="submit">
                    上传商品信息
                </Button>
            </Form.Item>
          </Form>
        </div>
      );
    }
}
export default UpdateBasic;
