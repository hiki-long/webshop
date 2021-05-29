import React from 'react';
import { Button, Space, Table, InputNumber } from 'antd';
import ShoppingCartItemInfo from './ShoppingCartItemInfo';

const columns = [
  {
    title: '物品名称',
    dataIndex: 'name',
  },
  {
    title: '分类',
    dataIndex: 'classify',
  },
  {
    title: '单价',
    dataIndex: 'single_price',
  },
  {
    title: '数量',
    dataIndex: 'number',
  },
  {
    title: '金额',
    dataIndex: 'row_total',
  }
];

let data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    // name: `商品 ${i}`,
    name: <ShoppingCartItemInfo />,
    classify: `商品类型`,
    single_price: `￥ ${i}.00`,
    number: <InputNumber min={1} defaultValue={1}/>,
    row_total: i
  });
}

class ShoppingCart extends React.Component {
    constructor() {
        super()
        this.state = {
            selectedRowKeys: [],//购物车中选中购买的物品
        };
        this.onDeleteItem = this.onDeleteItem.bind(this)
    }
    
    onSelectChange = Keys => {
        console.log('selectedRowKeys changed: ', Keys);
        this.setState({ selectedRowKeys: Keys });
    };

    //这里是清理购物车不要的东西的按钮
    onDeleteItem() {
        let RowKeys = [...this.state.selectedRowKeys]
        console.log(RowKeys)
        this.setState({ selectedRowKeys: []})
        console.log(data)
    }

    //这里是提交购买的按钮
    onCartSubmit() {

    }
    
    render() {
        const { selectedRowKeys } = this.state;
        const rowSelection = {
        selectedRowKeys,
        onChange: this.onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_NONE
        ],
    };

    return (
        <div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
            <Space>
                <Button type="default" onClick={this.onDeleteItem}>删除选中</Button>
                <Button type="primary">购买</Button>
            </Space>
        </div>
        );
    }
}

export default ShoppingCart;