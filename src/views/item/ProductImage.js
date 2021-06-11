import React from 'react';
import {Image, Row, Space} from 'antd';
import ReactImageZoom from 'react-image-zoom';

//这里是处理传入进来的图片模块
class ProductImage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ImageList: props.ImageList
        };
    }

    componentWillReceiveProps(nextProps){
        // console.log(nextProps.ImageList)
        this.setState({
            ImageList: nextProps.ImageList
        })
    }

    render(){
        const {ImageList} = this.state;
        const zoomconfig = {zoomStyle:'z-index: 10', width:300, height:300, zooWidth:800,  offset:{vertical: 0, horizontal: 100}, img:ImageList[0]}
        return(
            <div>
                {/* <Image src={this.state.ImageList[0]} preview={false} width={400}/> */}
                <ReactImageZoom {...zoomconfig} />
            </div>
        );
    }
}

export default ProductImage;