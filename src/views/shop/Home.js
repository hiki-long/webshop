import React from "react";
import { Carousel, Row, Col } from 'antd';

const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '400px',
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
                <Row>

                </Row>

            </div>
        );
    }
}

export default Home;