import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import React from 'react';
import ManagerSider from './ManagerSider';
import { Breadcrumb } from 'antd';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import ManagerMainPage from './ManagerMainPage';
import './manager.css'
import ProductIndex from './ProductIndex';
import OrderIndex from './OrderIndex';
import UserIndex from './UserIndex';

const breadcrumbNameMap = {
    '/manage': '首页',
    '/product-index': '商品管理',
    '/product-detail': '商品详情',
    '/add-product': '添加商品',
    '/category-index': '品类管理',
    '/add-category': '添加品类',
    '/order-index': '订单管理',
    '/order-detail': '订单详情',
    '/user-index': '用户管理',
};

class ManagerHome extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
        };
    }
    //logo切换
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        const location = this.props.location;
        const pathSnippets = location.pathname.split('/').filter(i => i);
        console.log(pathSnippets);
        console.log("-----------------");
        const extraBreadcrumbItems = pathSnippets.map((_, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
            console.log(url);
            return (
                <Breadcrumb.Item key={url}>
                    <Link to={url}>
                        {breadcrumbNameMap[url]}
                    </Link>
                </Breadcrumb.Item>
            );
        });
        const breadcrumbItems = extraBreadcrumbItems;
        return (
            <BrowserRouter>
                <Layout style={{height:"100vh"}}>
                    <ManagerSider collapsed={this.state.collapsed} selectKey={this.props.location.pathname}/>
                    <Layout style={{backgroundColor: 'white'}}>
                        {/* <Header collapsed={this.state.collapsed} toggle={this.toggle} style={{backgroundColor: 'white', color: 'white', height: '40px'}}>
                            <Breadcrumb style={{textAlign: 'start', marginLeft: '250px'}}>
                                {breadcrumbItems}
                            </Breadcrumb>
                        </Header> */}
                        <Content>
                            <Switch>
                                <Route path="/manage" component={ManagerMainPage}></Route>
                                <Route path="/product-index" component={ProductIndex}></Route>
                                <Route path="/order-index" component={OrderIndex}></Route>
                                <Route path="/user-index" component={UserIndex}></Route>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default withRouter(ManagerHome);