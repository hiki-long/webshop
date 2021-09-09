import { Space, Col, Row } from 'antd';
import { width } from 'dom-helpers';
import React from 'react';
import { withRouter } from 'react-router';
import ItemCard from '../itemlist/ItemCard';
import OneItemInfo from './OneItemInfo';

class RecommendBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            recommend: undefined
        }
    }

    async componentDidMount() {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow',
            credentials: 'include',
            'Access-Control-Allow-Credentials':'true',
        }

        const data = await fetch("http://localhost:8089/item/getRecommend", requestOptions)
        .then((response=> {
            return response.json().then(data=>{
                if(data.code===200){
                    // console.log(data.data);
                    return data.data;
                }
                return undefined
            })
        }))
        .catch((error=>console.log(error)))
        let requestOptions2 = {
            method: 'GET',
            redirect: 'follow'
        };
        let param = [];
        for (let i=0; data !== undefined && i<data.length; i++) {
            // console.log(data[i]);
            const data2 = await fetch("http://localhost:8089/item/detail?id="+data[i],requestOptions2)
            .then((response) =>{
                return response.json().then(data => {
                    if (data.code===200){
                        return data.data;
                    }
                })
            }).catch((error) =>console.log('error',error));
            // console.log(data2);
            param.push({
                uuid: data[i],
                image: JSON.parse(data2.image)[0],
                name: data2.name,
                price: data2.price,
                owner: data2.owner,
                description:data2.description,
            })
        }
        this.setState({
            recommend: param
        });
        // console.log(this.state.recommend);
    }

    async itemOnClick(key){
        let urlencode = new URLSearchParams();
        urlencode.append("itemUUID", key);
        let requestOptions = {
            method: 'POST',
            redirect: 'follow',
            mode: 'cors',
            body: urlencode,
            credentials: 'include',
            'Access-Control-Allow-Credentials':'true',
        }
        fetch('http://localhost:8089/item/recordLike', requestOptions).then(
            (response) => {
                console.log(key);
                return key
            }
        ).then( value => {
            console.log(value);
            this.props.history.push({
                pathname:'../test',
                state:{
                    'uuid':value
                }
            })
        })
    }


    render() {
        let show;
        if(this.state.recommend !== undefined && this.state.recommend !== null) {
            show = this.state.recommend.map((value) => 
                <Col span={4}>
                    <div onClick={this.itemOnClick.bind(this, value.uuid)}>
                        <ItemCard key={value.uuid} uuid={value.uuid} image={value.image} price={value.price} name={value.name}/>
                    </div>
                </Col>
            )
        } else {
            show = (<></>)
        }
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

export default withRouter(RecommendBar);