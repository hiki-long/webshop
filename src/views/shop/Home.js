import React from "react";
import { Carousel, Row, Col, Space, Pagination , Image,Divider} from 'antd';
import OneItem from '../item/OneItem';
import OneItemInfo from '../item/OneItemInfo';
import { Store } from "../../api/storeage";
import Image1 from "../../image/a-cool-couple.jpg";
import Image2 from "../../image/a-happy-shopping-woman.jpg"
import Image3 from "../../image/hand-fashion-jewelry-beard.jpg"
import Image4 from "../../image/woman-person-model-beauty.jpg"
import Image5 from "../../image/yoga-girls-personalization.jpg"
import ItemList from "../itemlist/ItemList";
import RecommendBar from "../item/RecommendBar";

const mockdata = [
    {
        uuid: "001d12d6-7812-4c82-b810-89abc830017c",
        name: "创维",
        price: 1389,
        image: "https://img10.360buyimg.com/n1/jfs/t1/201505/2/5311/139512/6134588aE68d765c2/68f46e68d5d62939.jpg"
    },
    {
        uuid: "001d12d6-7812-4c82-b810-89abc830017c",
        name: "创维",
        price: 1389,
        image: "https://img10.360buyimg.com/n1/jfs/t1/201505/2/5311/139512/6134588aE68d765c2/68f46e68d5d62939.jpg"
    },
    {
        uuid: "001d12d6-7812-4c82-b810-89abc830017c",
        name: "创维",
        price: 1389,
        image: "https://img10.360buyimg.com/n1/jfs/t1/201505/2/5311/139512/6134588aE68d765c2/68f46e68d5d62939.jpg"
    },
    {
        uuid: "001d12d6-7812-4c82-b810-89abc830017c",
        name: "创维",
        price: 1389,
        image: "https://img10.360buyimg.com/n1/jfs/t1/201505/2/5311/139512/6134588aE68d765c2/68f46e68d5d62939.jpg"
    },
]

//主界面,对应'/'路径，方便用来测试
class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            recommend: mockdata
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
            const data2 = await fetch("http://localhost:8089/item/detail?id="+data[i],requestOptions2)
            .then((response) =>{
                return response.json().then(data => {
                    if (data.code===200){
                        return data.data;
                    }
                })
            }).catch((error) =>console.log('error',error));
            param.push({
                ImageList: JSON.parse(data2.image),
                name: data2.name,
                price: data2.price,
                owner: data2.owner,
                description:data2.description,
            })
        }
        this.setState({
            recommend: param
        });
        console.log(this.state.recommend);
    }

    render() {
        return (
            <div style={{ padding: '50px 50px' }}>
                <Col span={24}>
                     <Carousel autoplay >
                        <div>
                            <Image src={Image1} preview={false} style={{height:'400px',width:'800px'}} />
                        </div>
                        <div>
                            <Image src={Image2} preview={false} style={{height:'400px',width:'800px'}}/>
                        </div>
                        <div>
                            <Image src={Image3} preview={false} style={{height:'400px',width:'800px'}}/>
                        </div>
                        <div>
                            <Image src={Image4} preview={false} style={{height:'400px',width:'800px'}}/>
                        </div>
                        <div>
                            <Image src={Image5} preview={false} style={{height:'400px',width:'800px'}}/>
                        </div>
                    </Carousel>
                </Col>
                <ItemList />
                <Row justify="center" style={{marginTop:"30px"}}>
                    <Col offset={4}>
                        <RecommendBar recommend={this.state.recommend} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;