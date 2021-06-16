import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Button,
  Select,
  InputNumber,
  Switch,
  Upload,
} from 'antd';
import { UploadGoad } from '../../api/uploadgoad';
import ItemType from './ItemType';
import AvatarUpload from '../user/AvatarUpload';

const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
};

//商品信息上传确认页面
class UpdateBasic extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            good_name: "",
            good_owner: "",
            good_remain: "",
            good_onSale: false,
            good_description: "",
            good_type: "",
            good_price: 1000,
        };
        this.handleSaleChange = this.handleSaleChange.bind(this);
        this.handleChangeRemain = this.handleChangeRemain.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
    }

    handleSaleChange(checked) {
        if(checked){
            this.setState({good_onSale: true})
        }
        else{
            this.setState({good_onSale: false})
        }
    }

    handleChangeName = event => {
        this.setState({good_name: event.target.value})
    }

    handleChangeOwner = event => {
        this.setState({good_owner: event.target.value})
    }

    handleChangeRemain(value) {
        this.setState({good_remain: value})
    }
 
    handleChangeDesc = event => {
        this.setState({good_description: event.target.value})
    }

    handleChangeType = value =>{
        console.log(value)
        this.setState({good_type: value})
    }

    handleChangePrice = value => {
        this.setState({good_price: value})
    }

    handleImageChange = url => {
        this.setState({imgurl: url})
        console.log("url = " + url);
    }

    handleSubmit = event => {
        const sumbitInfo = {
            name: this.state.good_name,
            owner: this.state.good_owner,
            remain: this.state.good_remain,
            type: this.state.good_type,
            onSale: this.state.good_onSale,
            description: this.state.good_description,
            price: this.state.good_price
        };
        UploadGoad(sumbitInfo);
        // this.props.history.push({
        //     pathname: '/itemUploadResult',
        //     state: {
        //         "Info": sumbitInfo
        //     }
        // })
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
            style={{textAlign:"left"}}
            layout="horizontal"
            onFinish={this.handleSubmit}
          >
            <Form.Item label="卖方" >
              <Input onChange={this.handleChangeOwner} />
            </Form.Item>
            <Form.Item name="item_name" label="商品名" >
                <Input onChange={this.handleChangeName}/>
            </Form.Item>
            <Form.Item name="type" label="商品类别"
                wrapperCol={{
                    span:4,
                }}
            >
                <ItemType onChangeType={this.handleChangeType} />
            </Form.Item>
            <Form.Item name="price" label="价格"
                wrapperCol={{
                    span:1,
                }}
            >
                <InputNumber
                    defaultValue={1000}
                    formatter={value => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    onChange={this.handleChangePrice}
                />
            </Form.Item>
            <Form.Item name="number" label="库存"
                wrapperCol={{
                    span:2,
                }}
            >
                <Form.Item name="input-number" noStyle>
                    <InputNumber min={0} max={100000}  onChange={this.handleChangeRemain}/>
                </Form.Item>
                <span className="ant-form-text">件</span>
            </Form.Item>
            <Form.Item name="onsale" label="是否在售"
                wrapperCol={{
                    span:1,
                }}>
                <Switch  onChange={this.handleSaleChange}/>
            </Form.Item>
            <Form.Item name="upload" label="商品图片" valuePropName="fileList" getValueFromEvent={normFile}
                >
                <AvatarUpload onChange={this.handleImageChange}/>
            </Form.Item>
            <Form.Item name={['user','introduction']} label="商品描述">
                <Input.TextArea showCount maxLength={250} onChange={this.handleChangeDesc}/>
            </Form.Item>
            <Form.Item 
                wrapperCol={{
                    span:12,
                    offset:10,
                }}>
                <Button type="primary" htmlType="submit" >
                    上传商品信息
                </Button>
            </Form.Item>
          </Form>
        </div>
      );
    }
}
export default UpdateBasic;
