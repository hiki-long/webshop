import { Descriptions, Radio, Button, Space, Image } from 'antd';
import React from 'react';

//商品信息上传页面
class ShowUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 'default'
    };
    
  }
  
  componentDidMount () {
    // get_history_item.push(this.props.history.location.state.Info);
    console.log(this.props.history.location.state.Info);
    this.setState({
      item: this.props.history.location.state.Info
    });

    // // console.log(this.props.history.location);
    // let get_history_item = [];
    // get_history_item = JSON.parse(sessionStorage.getItem("upload_time"));
    // if(get_history_item === null)
    // {
    //   get_history_item = [];
    // }
    // get_history_item.push(this.props.history.location.state.Info);
    // // console.log(get_history_item);
    // this.setState({
    //   item: get_history_item
    // },
    // () => {
    //   //这里打印的是最新的state值
    //   console.log(this.state.item);
    // });
  }

  // onEdit = e => {
  //   sessionStorage.setItem("upload_time", JSON.stringify(this.state.item));
  //   // sessionStorage.clear();
  //   this.props.history.push({
  //     pathname: './itemUpload'
  // })  
  // }

  render() {
    return (
      <div>
        <Descriptions
          bordered
          title="商品信息1"
          column={3}
          style={{width:"60%", marginLeft:"30%"}}
          size={this.state.size}
          extra={<Button type="primary" onClick={this.onEdit}>修改</Button>}
        >
          <Descriptions.Item label="商品名" name="item_name" style>{this.state.item !== undefined ? this.state.item.name : ""}</Descriptions.Item>
          <Descriptions.Item label="卖家" name="shop_name" >{this.state.item !== undefined ? this.state.item.owner : ""}</Descriptions.Item>
          <Descriptions.Item label="商品类别" name="item_type">{this.state.item !== undefined ? this.state.item.type : ""}</Descriptions.Item>
          <Descriptions.Item label="商品库存" name="item_number" >{this.state.item !== undefined ? this.state.item.remain : ""}</Descriptions.Item>
          <Descriptions.Item label="商品价格" name="item_price" >{this.state.item !== undefined ? this.state.item.price : ""}</Descriptions.Item>
          <Descriptions.Item label="是否在售" name="on_sale">是</Descriptions.Item>
          <Descriptions.Item label="图片" name="image">{this.state.item !== undefined ? <Image  style={{width:"200px", height:"200px"}} src={this.state.item.image} preview={false}/> : ""}</Descriptions.Item>
          <Descriptions.Item label="商品详情" name="desc">
          {this.state.item !== undefined ? this.state.item.description : ""}
          </Descriptions.Item>
        </Descriptions>
        <br/>
        {/* <Space>
            <Button type="default"  style={{marginRight:"10px"}}>继续提交</Button>
            <Button type="primary" style={{marginLeft:"10px"}}>确认提交</Button>
        </Space> */}
      </div>
    );
  }
}

export default ShowUpload