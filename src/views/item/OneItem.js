import React from 'react';
import { Layout , Image } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
class OneItem extends React.Component {
    //商品预览界面
    render() {
        return(
            <div>
                <Layout >
                    <Image
                        preview={false}
                        width={300}
                        src={'http://image.uc.cn/s/wemedia/s/upload/2020/e3466f09e4bc2b32558be930245a2454.jpg'}
                    />
                    <div>价格：￥1000</div>
                    <div>美少女</div>
                </Layout>
            </div>
        );
    }
}

export default OneItem;