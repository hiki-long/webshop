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
                        <div className='status-info'>{text === 1 ? '在售' : '已下架'}</div>
                        <Button onClick={() => {this.onSetProductStatus(record.id,text)}}>{text === 1 ? '下架' : '上架'}</Button>
                    </div>
                )
            }
        }, {
            title: '操作',
            render: (text, record) => {
                return (
                    <div className='operating'>
                        <Space>
                            <a onClick={() => {this.goProductDetail(record.id)}}>详情</a>
                            <a onClick={() => {this.goProductEdit(record.id)}}>编辑</a>
                        </Space>
                    </div>

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
    
    //上下架
    onSetProductStatus = (id,status) => {
        
    }
    //分页
    // handleTableChange = (pagination) => {
    //     const pager = { ...this.state.pagination };
    //     pager.current = pagination.current;
    //     //改变当前页
    //     this.setState({
    //         pagination: pager,
    //     });
    // }
    //跳转添加商品页
    goAddProduct = () => {
        this.props.history.push({
            pathname: '/itemUpload'
        })
    }
    //跳转商品详情页
    goProductDetail = (id) => {
        const sumbitInfo = {
            name: "测试",
            owner: "御主",
            remain: 100,
            type: "手机",
            onSale: true,
            description: "描述",
            price: 200,
            image: "https://img11.360buyimg.com/ceco/s600x600_jfs/t1/142625/26/10681/43504/5f8666feE37892e29/317e4af1178ebf8f.jpg!q70.jpg"
        };
        this.props.history.push({
            pathname: '/showupload',
            state: {
                "Info": sumbitInfo,
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

    async componentDidMount() {
        let urlencoded = new URLSearchParams();
        urlencoded.append("page", 1);
        urlencoded.append("size", 10);
        let requestOptions = {
            method: 'POST',
            redirect: 'follow',
            mode: 'cors',
            body: urlencoded,
            headers: {
                'Access-Control-Allow-Origin':'*', 
                'Access-Control-Allow-Credentials':'true',
            },
            withCredentials: true,
        };
        const data =await fetch("http://localhost:8089/item/list", requestOptions)
            .then((response) => {
                return response.json().then(data => {
                    if (data.code===200){
                        //console.log(data.data)
                        return data.data;
                    }
                })
                
            })
            .catch(error => console.log('error', error));
            this.setState({
                total:data.total,
                info:data.list,
                pagination:{
                    current: 1,
                    position:['none', 'bottomCenter']
                }
            })
    }

    async changePage(page,pageSize){
        let urlencoded = new URLSearchParams();
        urlencoded.append("page", page);
        urlencoded.append("size", 10);
        let requestOptions = {
            method: 'POST',
            redirect: 'follow',
            mode: 'cors',
            body: urlencoded,
            headers: {
                'Access-Control-Allow-Origin':'*', 
                'Access-Control-Allow-Credentials':'true',
            },
            withCredentials: true,
        };
        const data =await fetch("http://localhost:8089/item/list", requestOptions)
            .then((response) => {
                return response.json().then(data => {
                    if (data.code===200){
                        console.log(data.data);
                        return data.data;
                    }
                })
                
            })
            .catch(error => console.log('error', error));
            this.setState({
                total:data.total,
                info:data.list,
                pagination:{
                    current: page,
                    position:['none', 'bottomCenter']
                }
            })
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
                        <Button type='primary' onClick={this.onSearch}>搜索</Button>
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
                    onChange={this.changePage.bind(this)}
                />
            </div>
        )
    }
}

export default ProductIndex;