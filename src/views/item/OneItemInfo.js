import React from 'react';
import { Row, Col, Space, Button } from 'antd';
import ProductImage from './ProductImage';
import ProductHeaer from './ProductHeader';
import ProductNumber from './ProductNumber';
import ProductBuyButton from './ProductBuyButton';
import ProductDetail from './ProductDetail';
import ProductComment from './ProductComment';
import ProductRecommend from './ProductRecommend';
import CommentEditor from './CommentEditor';
import { Footer } from 'antd/lib/layout/layout';
import { SubmitOrder } from '../../api/order';

//商品详情页面
class OneItemInfo extends React.Component{
    state = {
        ImageList:['http://image.uc.cn/s/wemedia/s/upload/2020/e3466f09e4bc2b32558be930245a2454.jpg'],
        name:"test",
        price:0,
        uuid:"",
        number:1,
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
                    //console.log(data.data)
                    return data.data;
                }
            })
        }).catch((error) =>console.log('error',error));
        this.setState({
            ImageList: JSON.parse(data.image),
            name: data.name,
            price: data.price
        })
    }
    
    onPurchase(uuid) {
        let params = new Map();
        let params2 = new Map();
        params.set(uuid, this.state.number)
        params2.set("2039492034-2394",2)
        // console.log(params)
        // console.log(JSON.stringify([...params]))
        const data = {
            numberlist: JSON.stringify([...params]),
            ownerlist: JSON.stringify([...params2])
        }
        SubmitOrder(data)
    }

    onAddShoppingCart(uuid) {
        
    }

    ChangeNumber = value => {
        console.log("value = " + value)
        this.setState({
                number: value,
            }
        )
    }

    render(){
        const{ImageList,uuid,name,price}=this.state
        return (
            <div>
                <Row justify="start">
                    <Col offset={4}>
                        <ProductImage ImageList={ImageList} />
                    </Col>
                    <Col offset={4} style={{textAlign: 'left' }} >
                        <Space direction="vertical" size={20}>
                            <ProductHeaer name={name} price={price}/>
                            <ProductNumber ChangeNumber={this.ChangeNumber}/>
                            <ProductBuyButton onPurchase={this.onPurchase.bind(this, uuid)}/>
                            <ProductDetail />
                        </Space>
                    </Col>
                </Row>
                <Row justify="center" >
                    <ProductComment />
                </Row>
                <Row justify="center">
                    <ProductRecommend />
                </Row>
                <CommentEditor />
                <Button type="primary">发表评论</Button>
                <Footer style={{height: "100px", backgroundColor: "#DADED4"}} ></Footer>
            </div>
        );
    }
}

export default OneItemInfo;