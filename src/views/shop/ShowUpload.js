import { Descriptions, Radio, Button, Space } from 'antd';
import React from 'react';
import {GetItem} from '../../api/item';

//商品信息上传页面
class ShowUpload extends React.Component {
  state = {
    size: 'default',
  };

  onEdit = e => {
    // window.location.href="http://localhost:3000/itemInfo";
    GetItem()
  }

  render() {
    return (
      <div>
        <Descriptions
          bordered
          title="商品信息1"
          column={3}
          style={{width:"80%", marginLeft:"10%", marginRight:"10%"}}
          size={this.state.size}
          extra={<Button type="primary" onClick={this.onEdit}>修改</Button>}
        >
          <Descriptions.Item label="商品名" name="item_name" style>这里填写商品名</Descriptions.Item>
          <Descriptions.Item label="卖家" name="shop_name" >这里填写卖家名</Descriptions.Item>
          <Descriptions.Item label="商品类别" name="item_type">这里填写商品类别</Descriptions.Item>
          <Descriptions.Item label="商品库存" name="item_number" >这里填写商品数量</Descriptions.Item>
          <Descriptions.Item label="商品价格" name="item_price" >这里填写商品价格</Descriptions.Item>
          <Descriptions.Item label="是否在售" name="on_sale">是</Descriptions.Item>
          <Descriptions.Item label="商品详情" name="desc">
            商品详情描述页面
          </Descriptions.Item>
        </Descriptions>
        <br/>
        <Space>
            <Button type="default"  style={{marginRight:"10px"}}>继续提交</Button>
            <Button type="primary" style={{marginLeft:"10px"}}>确认提交</Button>
        </Space>
      </div>
    );
  }
}

export default ShowUpload