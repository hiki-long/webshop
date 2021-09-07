import React,{Component} from 'react'
import { Table, Select, Button, message } from 'antd';
const Option = Select.Option;

const mockdata = [
    {
        key: '1',
        orderNo: 'xkewl23',
        receiverName: '小明',
        statusDesc: '未支付',
        payment: '100',
        createTime: 'sdf',
    }
];

const columns = [{
    title: '订单号',
    dataIndex: 'orderNo',
}, {
    title: '收件人',
    dataIndex: 'receiverName',
}, {
    title: '订单状态',
    dataIndex: 'statusDesc',
}, {
    title: '订单总价',
    dataIndex: 'payment',
}, {
    title: '创建时间',
    dataIndex: 'createTime',
},{
    title: '操作',
    dataIndex: 'orderItemVoList',
    render: (text, record) => {
        return (
            <a style={{color:'#337ab7'}} onClick={() => this.goOrderDetail(record.orderNo)}>详情</a>
        )
    }
}];

class OrderIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search:'', //搜索
            orderList: mockdata,//订单列表
            pagination: {
                position: ["none", "bottomCenter"]
            }, //分页数据
            loading: false,
        }

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
        const data =await fetch("http://localhost:8089/order/list", requestOptions)
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
        const data =await fetch("http://localhost:8089/order/list", requestOptions)
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

    searchChange = (value) => {
        this.setState({
            search: value,
        })
    }

    //按订单号查询
    onSearch = () => {
       
    }

    //跳转订单详情页面
    goOrderDetail = (params ='') => {
        this.props.history.push({
            pathname: '/order-detail',
            state: {
                orderNo: params //传入订单号
            },
        });
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

    render() {
        return (
            <div className='order-index'>
                <div className='top'>
                    <Select
                        className='select-mr select'
                        showSearch
                        defaultValue="按订单号查询"
                        style={{ width: 200 }}
                        placeholder="按订单号查询"
                        optionFilterProp="children"
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="id">按订单号查询</Option>
                    </Select>
                    <Select
                        className='select-mr'
                        mode="combobox"
                        style={{ width: 200 }}
                        onChange={this.searchChange}
                        filterOption={false}
                        placeholder="订单号"
                    >
                    </Select>
                    <Button type='primary' onClick={this.onSearch}>搜索</Button>
                </div>
                <Table
                    style={{marginLeft: "260px"}}
                    columns={columns} rowKey='orderNo'
                    dataSource={this.state.orderList}
                    pagination={this.state.pagination}
                    loading={this.state.loading}
                    onChange={this.changePage.bind(this)}
                />
            </div>
        )
    }
}

export default OrderIndex;