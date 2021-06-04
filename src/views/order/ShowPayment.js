import React from 'react';
import QRCode from 'qrcode.react';
import { Col } from 'antd';

class ShowPayment extends React.Component {

    render() {
        return(
            <div>
                <Col>
                    <QRCode
                        value='https://www.baidu.com/'// 生成二维码的内容
                        size={300} // 二维码的大小
                        fgColor="#000000" // 二维码的颜色
                        imageSettings={{ // 中间有图片logo
                            src: 'http://images.shejidaren.com/wp-content/uploads/2020/03/36365-2.png',
                            height: 60,
                            width: 60,
                            excavate: true
                        }}
                    />
                </Col>
            </div>
        );
    }
}

export default ShowPayment;