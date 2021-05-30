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

//这里是mock的伪造数据
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
            dataSource: data
        };
        this.onDeleteItem = this.onDeleteItem.bind(this)
    }
    
    onSelectChange = Keys => {
        console.log('selectedRowKeys changed: ', Keys);
        this.setState({ selectedRowKeys: Keys });
    };

    //这里是清理购物车不要的东西的按钮
    onDeleteItem() {
        //这里改变state状态即更新购物车数据，之后要加入后端的购物车交互操作
        let selectedRowKeys = [...this.state.selectedRowKeys]
        console.log(selectedRowKeys)
        this.setState({ selectedRowKeys: []})
        let dataSource = [...this.state.dataSource]
        for(let i in selectedRowKeys) {
          dataSource.splice(dataSource.findIndex(item => item.key === i.key), 1)
        }
        this.setState({ dataSource: dataSource})
    }

    //这里是提交购买的按钮
    onCartSubmit() {

    }
    
    render() {
        const { selectedRowKeys, dataSource } = this.state;
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
            <Table rowSelection={rowSelection} columns={columns} dataSource={dataSource} />
            <Space>
                <Button type="default" onClick={this.onDeleteItem}>删除选中</Button>
                <Button type="primary">购买</Button>
            </Space>
        </div>
        );
    }
}

export default ShoppingCart;