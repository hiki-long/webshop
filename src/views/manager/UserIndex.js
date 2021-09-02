import React,{Component} from 'react'
import { Table, message } from 'antd';

const mockData = [
    {
        key: '1',
        id: '23094024',
        username: 'xxxx',
        email: '111@qq.com',
        userRole: '买家'
    }
]

const columns = [{
    title: '用户id',
    dataIndex: 'id',
}, {
    title: '用户名',
    dataIndex: 'username',
}, {
    title: '邮箱',
    dataIndex: 'email',
}, {
    title: '用户类型',
    dataIndex: 'userRole',
}, {
    title: '操作',
    render: (text, record) => {
        return (
            <a style={{color: '#333ab7'}} onClick={() => this.goUserDetail(record.id)}>操作</a>
        )
    }
}];

class UserIndex extends Component {
    state = {
        data: mockData, //用户列表数据
        pagination: {
            position: ['none', 'bottomCenter']
        }, //分页
        loading: false //loading状态
    }

    goUserDetail(id) {
        console.log(id);
    }
    //处理表单变化
    handleTableChange = (pagination) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        //改变当前页
        this.setState({
            pagination: pager,
        });
        this.fetch({
            pageSize: pagination.pageSize, //一次显示10条数据
            pageNum: pagination.current, //当前页数
        })
    }

    render() {
        return (
            <Table
                style={{marginLeft: "260px"}}
                columns={columns} rowKey='id'
                dataSource={this.state.data}
                pagination={this.state.pagination}
                loading={this.state.loading}
                onChange={this.handleTableChange}
            />
        )
    }
}

export default UserIndex;