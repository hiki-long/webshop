import { InputNumber, Space } from 'antd';
import React from 'react';

class ProductNumber extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            buynum: props.buynum,
        }
    }

    render(){
        return(
            <div>
                <Space>
                    <span>数量</span>
                    <InputNumber min={1} value={this.state.buynum}/>
                    <span>件</span>
                </Space>
            </div>
        );
    }

}

export default ProductNumber;