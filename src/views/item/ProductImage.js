import React from 'react';
import {Image, Row, Space} from 'antd';
// import ReactImageMagnify from 'react-image-magnify';
//这里是处理传入进来的图片模块
class ProductImage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            ImageList: props.ImageList
        };
    }

    render(){
        return(
            <div>
                {/* <ReactImageMagnify style={{width:200, height:200, zIndex: 10}} {...{
                        smallImage: {
                            alt: '看不到图片',
                            src: 'http://image.uc.cn/s/wemedia/s/upload/2020/e3466f09e4bc2b32558be930245a2454.jpg',
                            width: 400,
                            height: 400
                        },
                        largeImage: {
                            src: 'http://image.uc.cn/s/wemedia/s/upload/2020/e3466f09e4bc2b32558be930245a2454.jpg',
                            width: 800,
                            height: 800
                        }
                    }}    
                /> */}
                <Image src={this.state.ImageList[0]} preview={false} width={400}/>
                <Row>
                    <Space size={24}>
                        <Image src={'http://image.uc.cn/s/wemedia/s/upload/2020/e3466f09e4bc2b32558be930245a2454.jpg'} preview={false} width={60}> </Image>
                        <Image src={'http://image.uc.cn/s/wemedia/s/upload/2020/e3466f09e4bc2b32558be930245a2454.jpg'} preview={false} width={60}> </Image>
                        <Image src={'http://image.uc.cn/s/wemedia/s/upload/2020/e3466f09e4bc2b32558be930245a2454.jpg'} preview={false} width={60}> </Image>
                        <Image src={'http://image.uc.cn/s/wemedia/s/upload/2020/e3466f09e4bc2b32558be930245a2454.jpg'} preview={false} width={60}> </Image>
                        <Image src={'http://image.uc.cn/s/wemedia/s/upload/2020/e3466f09e4bc2b32558be930245a2454.jpg'} preview={false} width={60}> </Image>
                    </Space>
                </Row>
            </div>
        );
    }
}

export default ProductImage;