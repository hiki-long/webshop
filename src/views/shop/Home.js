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

//主界面,对应'/'路径，方便用来测试
class Home extends React.Component {

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
            </div>
        );
    }
}

export default Home;