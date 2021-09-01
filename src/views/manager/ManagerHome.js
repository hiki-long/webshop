import Layout, { Footer } from 'antd/lib/layout/layout';
import React from 'react';
import ManagerSider from './ManagerSider';
import './manager.less'

class ManagerHome extends React.Component{
    render() {
        return (
            <Layout  style={{height:"100vh"}}>
                <ManagerSider/>
            </Layout>
        );
    }
}

export default ManagerHome;