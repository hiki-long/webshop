import React from "react";
import { Carousel, Row, Col, Space, Pagination } from 'antd';
import OneItem from '../item/OneItem';

const contentStyle = {
    height: '450px',
    color: '#fff',
    lineHeight: '450px',
    textAlign: 'center',
    background: '#364d79',
};

class Home extends React.Component {
    render() {
        return (
            <div>
                <Col className="gutter-row" span={20} offset={2}>
                    <Carousel autoplay >
                        <div>
                            <h3 style={contentStyle}>1</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>2</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>3</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>4</h3>
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