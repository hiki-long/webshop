import { InputNumber, Space } from 'antd';
import React from 'react';
//商品购买数量选择
class ProductNumber extends React.Component{
    // constructor(props){
    //     super(props);
    //     // this.state = {
    //     //     buynum: props.buynum,
    //     // }
    // }

    render(){
        return(
            <div>
                <Space>
                    <span>数量</span>
                    <InputNumber min={1} onChange={this.props.ChangeNumber}/>
                    <span>件</span>
                </Space>
            </div>
        );
    }

}

export default ProductNumber;