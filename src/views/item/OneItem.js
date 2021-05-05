import React from 'react';
import { Layout , Image, Card, Space } from 'antd';
import { Link } from 'react-router-dom';
import { HeartOutlined , ShoppingCartOutlined } from '@ant-design/icons';
class OneItem extends React.Component {
    //商品预览界面
    render() {
        return(
            <div>
                <Layout >
                    <Card size="small" style={{width: 300 }}>
                        <Image
                            preview={false}
                            width={300}
                            src={'http://image.uc.cn/s/wemedia/s/upload/2020/e3466f09e4bc2b32558be930245a2454.jpg'}
                        />
                        <Link>
                            <p>价格：￥1000</p>
                            <p>美少女</p>
                            <p>
                                <Space>
                                    <Link>
                                        <HeartOutlined />关注
                                    </Link>
                                    <Link>
                                        <ShoppingCartOutlined />添加到购物车
                                    </Link>
                                </Space>
                            </p>
                        </Link>
                    </Card>
                </Layout>
            </div>
        );
    }
}

export default OneItem;