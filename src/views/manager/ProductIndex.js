import React,{Component} from 'react'
import { Table, Select, Button, message, Modal, Space } from 'antd';
// import './product-index.less'
const Option = Select.Option;
const confirm = Modal.confirm;

const mockdata = [
    {
        key: '1',
        id: '234234',
        price: 234,
        name: '商品',
        status: 1
    }
]

class ProductIndex extends Component {
    constructor(props) {
        super(props);

        this.columns = [{
            title: '商品ID',
            dataIndex: 'id',
        }, {
            title: '商品信息',
            dataIndex: 'name',
        }, {
            title: '价格',
            dataIndex: 'price',
        }, {
            title: '状态',
            dataIndex: 'status',
            render: (text, record) => {
                return (
                    <div className='status-box'>
                        <p className='status-info'>{text === 1 ? '在售' : '已下架'}</p>
                        <Button onClick={() => {this.onSetProductStatus(record.id,text)}}>{text === 1 ? '下架' : '上架'}</Button>
                    </div>
                )
            }
        }, {
            title: '操作',
            render: (text, record) => {
                return (
                    <p className='operating'>
                        <Space>
                            <a onClick={() => {this.goProductDetail(record.id)}}>详情</a>
                            <a onClick={() => {this.goProductEdit(record.id)}}>编辑</a>
                        </Space>
                    </p>

                )
            }
        }];

        this.state = {
            dataList: mockdata,
            pagination: {
                position:['none', 'bottomCenter'] 
            },
            loading: false,
            type: 'id', //搜索类型 默认按照id查询
            search:'', //搜索值
        }
    }
    //查询商品列表
    fetch = (params = {pageNum: 1, pageSize: 10 }) => {
        
    }

    //选择搜索类型
    selectType = (val) => {
        console.log(val);
        this.setState({
            type: val
        })
    }
    //监听搜索值
    searchChange = (val) => {
        this.setState({
            search: val,
        })
    }

    //搜索
    onSearch = () => {

    }
    //搜索
    
    //上下架
    onSetProductStatus = (id,status) => {
        
    }
    //分页
    handleTableChange = (pagination) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        //改变当前页
        this.setState({
            pagination: pager,
        });
    }
    //跳转添加商品页
    goAddProduct = () => {
        this.props.history.push({
            pathname: '/add-product'
        })
    }
    //跳转商品详情页
    goProductDetail = (id) => {
        this.props.history.push({
            pathname: '/product-detail',
            state: {
                productId: id,
            }
        })
    }
    //跳转编辑商品
    goProductEdit = (id) => {
        this.props.history.push({
            pathname: '/add-product',
            state: {
                productId: id,
            }
        })
    }

    componentDidMount () {
        this.fetch();
    }

    render() {
        return (
            <div className='product-index'>
                <div className="top">
                    <Space>
                    <div>
                        <Select
                            className='select-mr select'
                            showSearch
                            defaultValue="按商品ID查询"
                            style={{ width: 200 }}
                            placeholder="按商品ID查询"
                            optionFilterProp="children"
                            onChange={this.selectType}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="id">按商品ID查询</Option>
                            <Option value="name">按商品名称查询</Option>
                        </Select>
                        <Select
                            className='select-mr'
                            mode="combobox"
                            style={{ width: 200 }}
                            onChange={this.searchChange}
                            filterOption={false}
                            placeholder="关键词"
                        >
                        </Select>
                        <Button type='primary' icon="search" onClick={this.onSearch}>搜索</Button>
                    </div>
                    <Button style={{marginLeft: "60px"}} type="primary" onClick={this.goAddProduct}>添加商品</Button>
                    </Space>
                </div>
                <Table
                    style={{marginLeft: "260px"}}
                    columns={this.columns} rowKey='id'
                    dataSource={this.state.dataList}
                    pagination={this.state.pagination}
                    loading={this.state.loading}
                    onChange={this.handleTableChange}
                />
            </div>
        )
    }
}

export default ProductIndex;