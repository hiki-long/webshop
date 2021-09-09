import { Space, Col, Row } from 'antd';
import { width } from 'dom-helpers';
import React from 'react';
import ItemCard from '../itemlist/ItemCard';

class RecommendBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recommend: props.recommend
        }
    }

    render() {
        const show = this.state.recommend.map((value) => 
            <Col span={4}>
                <div>
                    <ItemCard key={value.uuid} uuid={value.uuid} image={value.image} price={value.price} name={value.name}/>
                </div>
            </Col>
        )
        return(
            <>
                <Space>
                    <Row>
                        {show}
                    </Row>
                </Space>
            </>
        );
    }
};

export default RecommendBar;