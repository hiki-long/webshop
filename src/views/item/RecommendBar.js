import { Space, Col, Row } from 'antd';
import { width } from 'dom-helpers';
import React from 'react';
import ItemCard from '../itemlist/ItemCard';
import OneItemInfo from './OneItemInfo';

class RecommendBar extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props.recommend);
        this.state = {
            recommend: props.recommend
        };
    }

    async componentDidMount() {
        console.log(this.state.recommend);
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