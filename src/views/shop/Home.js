import React from "react";
import { Carousel, Row, Col, Space, Pagination , Image} from 'antd';
import OneItem from '../item/OneItem';
import OneItemInfo from '../item/OneItemInfo';
import { Store } from "../../api/storeage";
import Image1 from "../../image/a-cool-couple.jpg";
import Image2 from "../../image/a-happy-shopping-woman.jpg"
import Image3 from "../../image/hand-fashion-jewelry-beard.jpg"
import Image4 from "../../image/woman-person-model-beauty.jpg"
import Image5 from "../../image/yoga-girls-personalization.jpg"

const contentStyle = {
    height: '450px',
    color: '#fff',
    lineHeight: '450px',
    textAlign: 'center',
    background: '#364d79',
};

//主界面,对应'/'路径，方便用来测试
class Home extends React.Component {

    render() {
        return (
            <div>
                <Col className="gutter-row" span={16} offset={4}>
                    <Carousel autoplay >
                        <div>
                            <Image src={Image1} preview={false} />
                        </div>
                        <div>
                            <Image src={Image2} preview={false} />
                        </div>
                        <div>
                            <Image src={Image3} preview={false} />
                        </div>
                        <div>
                            <Image src={Image4} preview={false} />
                        </div>
                        <div>
                            <Image src={Image5} preview={false} />
                        </div>
                    </Carousel>
                </Col>
                <Row gutter={16}>
                    <Col span={4} offset={2}><OneItem/></Col>
                    <Col span={4} offset={1}><OneItem/></Col>
                    <Col span={4} offset={1}><OneItem/></Col>
                    <Col span={4} offset={1}><OneItem/></Col>
                </Row>
                <Row gutter={16}>
                    <Col span={4} offset={2}><OneItem/></Col>
                    <Col span={4} offset={1}><OneItem/></Col>
                    <Col span={4} offset={1}><OneItem/></Col>
                    <Col span={4} offset={1}><OneItem/></Col>
                </Row>
                <Pagination showQuickJumper defaultCurrent={1} total={500} />
            </div>
        );
    }
}

export default Home;