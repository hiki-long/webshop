import { Card, Row, Image,Col,InputNumber,Checkbox } from 'antd';
import React from 'react';

class ShoppingCartItemInfo extends React.Component{
    state = {
        uuid:"",
        num:1,
        owner:"",
        select:false,
    }
    
    constructor(props) {
        super(props);
        this.state.uuid=props.uuid;
        this.state.num=props.num;
    };

    async componentDidMount(){
        let requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };
        const data = await fetch("http://localhost:8089/item/detail?id="+this.state.uuid,requestOptions)
            .then((response) =>{
                return response.json().then(data => {
                    if(data.code===200){
                        return data.data;
                      }
                })
            })
            .catch(error => console.log('error', error));
        // console.log(data)
        this.setState({
            image: JSON.parse(data.image)[0],
            name:data.name,
            price:data.price,
            owner:data.owner
        });   
        if (this.props.onRef) {
            this.props.onRef(this);
         }
     
    };

    onSelect(){
        this.setState({
            select:!this.state.select
        })
        this.props.onSelect(!this.state.select,this.state.uuid,this.state.num,this.state.owner,this.state.name,this.state.price,this.state.image,false);

    }   

    onChange(num){
        this.setState({
            num:num
        })
        this.props.onSelect(this.state.select,this.state.uuid,num,this.state.owner,this.state.name,this.state.price,this.state.image,true);
    }

    render() {
        const { image,name,num,price,owner } = this.state
        return(
            <div>
                <Row align="middle">
                    <Col xs={2}>
                        <Checkbox onChange={this.onSelect.bind(this)}/>
                    </Col>
                    <Col xs={4}>
                        <Image src={image} style={{height:'100px',width:'100px'}} preview={false}/>
                    </Col>
                    <Col xs={2}>
                        <div style={{alignSelf:"center"}}>{name}</div>
                    </Col>
                    <Col xs={2}>
                        <div style={{alignSelf:"center"}}>{owner}</div>
                    </Col>
                    <Col xs={2}   offset={6}>
                        <div style={{alignSelf:"center"}}>￥{price}</div>
                    </Col>
                    <Col xs={2}>
                        <InputNumber min={1} defaultValue={num} onChange={this.onChange.bind(this)}/>
                    </Col>
                    <Col xs={2}>
                        <div style={{alignSelf:"center"}}>￥{price*num}</div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ShoppingCartItemInfo;