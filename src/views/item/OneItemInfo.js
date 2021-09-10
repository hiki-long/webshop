import React from 'react';
import { withRouter } from 'react-router';
import { Typography,Row, Col, Space, Divider } from 'antd';
import ProductImage from './ProductImage';
import ProductHeaer from './ProductHeader';
import ProductNumber from './ProductNumber';
import ProductBuyButton from './ProductBuyButton';
import { SubmitOrder } from '../../api/order';
import { SubmitOneCart } from '../../api/cart';
import marked from 'marked'
import RecommendBar from './RecommendBar';

const mockdata = [
    {
        uuid: "019d83e3-7566-4c7d-8a2a-a07f8e1519f1",
        name: "创维",
        price: 1389,
        image: "https://img10.360buyimg.com/n1/jfs/t1/201505/2/5311/139512/6134588aE68d765c2/68f46e68d5d62939.jpg"
    },
    {
        uuid: "019d83e3-7566-4c7d-8a2a-a07f8e1519f1",
        name: "创维",
        price: 1389,
        image: "https://img10.360buyimg.com/n1/jfs/t1/201505/2/5311/139512/6134588aE68d765c2/68f46e68d5d62939.jpg"
    },
    {
        uuid: "019d83e3-7566-4c7d-8a2a-a07f8e1519f1",
        name: "创维",
        price: 1389,
        image: "https://img10.360buyimg.com/n1/jfs/t1/201505/2/5311/139512/6134588aE68d765c2/68f46e68d5d62939.jpg"
    },
    {
        uuid: "019d83e3-7566-4c7d-8a2a-a07f8e1519f1",
        name: "创维",
        price: 1389,
        image: "https://img10.360buyimg.com/n1/jfs/t1/201505/2/5311/139512/6134588aE68d765c2/68f46e68d5d62939.jpg"
    }

]

//商品详情页面
class OneItemInfo extends React.Component{
    state = {
        ImageList:['http://image.uc.cn/s/wemedia/s/upload/2020/e3466f09e4bc2b32558be930245a2454.jpg'],
        name:"test",
        price:0,
        uuid:"",
        number:1,
        description:"",
    }

    constructor(props){
        super(props);
        this.state.uuid=props.uuid
    }

    async componentDidMount() {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        const data = await fetch("http://localhost:8089/item/detail?id="+this.state.uuid,requestOptions)
        .then((response) =>{
            return response.json().then(data => {
                if (data.code===200){
                    // console.log(data.data)
                    return data.data;
                }
            })
        }).catch((error) =>console.log('error',error));
        this.setState({
            ImageList: JSON.parse(data.image),
            name: data.name,
            price: data.price,
            owner: data.owner,
            description:data.description,
        })
    }
    
    onPurchase(uuid,num,own) {
        let params = [];
        const data = {
            itemUUID: uuid,
            number: num,
            owner: own,
        }
        params.push(data);
        let data2 = new Map();
        data2.set(uuid, {
            itemUUID: uuid,
            number: num,
            owner: own,
            name: this.state.name,
            price: this.state.price,
            image: this.state.ImageList[0]
        });
        SubmitOrder(params, data2, this.props, true);
    }

    onAddShoppingCart(uuid, number) {
        const data = {
            itemUUID: uuid,
            number: number
        }
        SubmitOneCart(data);
    }

    ChangeNumber = value => {
        console.log("value = " + value)
        this.setState({
                number: value,
            }
        )
    }


    render(){
        const{ImageList,uuid,name,price,number,owner,description}=this.state
        return (
            <div>
                <Row justify="start">
                    <Col offset={4}>
                        <ProductImage ImageList={ImageList} />
                    </Col>
                    <Col offset={4} style={{textAlign: 'left' }} >
                        <Space direction="vertical" size={30}>
                            <ProductHeaer name={name} price={price}/>
                            <ProductNumber ChangeNumber={this.ChangeNumber}/>
                            <ProductBuyButton onPurchase={this.onPurchase.bind(this, uuid, number, owner)} onAddShoppingCart={this.onAddShoppingCart.bind(this, uuid, number)}/>
                        </Space>
                    </Col>
                </Row>
                <Row justify="center" style={{marginTop:"30px"}}>
                    <Col offset={4}>
                        <RecommendBar recommend={mockdata} url={"http://localhost:8089/item/getItemRecommend"} ishome={false} uuid={uuid}/>
                    </Col>
                </Row>
                <Row justify="center" >
                    <Typography>
                        <Divider horizontal><span>商品介绍</span></Divider>
                        <div dangerouslySetInnerHTML={{__html:marked(description)}}/>
                    </Typography>
                </Row>
            </div>
        );
    }
}

export default withRouter(OneItemInfo);