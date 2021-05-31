import React from 'react';
import { Card, Col, Row,Layout,Pagination,Button,Collapse,Cascader,Divider,InputNumber,Input} from 'antd';
import ItemCard from './ItemCard';
const { Panel } = Collapse;
class ItemList extends React.Component{

    constructor() {
        super();
        this.state = {
            total:1,
            defaultPageSize:20,
            currentPage:1,
            info:[],
            // options: jsondata,
            minPrice:-1,
            maxPrice:0x3FFFFFFFF,
            type:"all",
            name:"",
        }
        fetch('./itemType.json', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
        },
        })
        .then(response => response.json())
        .then(data => {
            this.setState({options: data})
            console.log(this.state.options)
        })
    }

    async componentDidMount(){
        let requestOptions = {
            method: 'GET',
            redirect: 'follow',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin':'*', 
                'Access-Control-Allow-Credentials':'true',
            },
            withCredentials: true,
        };
        const data =await fetch("http://localhost:8089/item/listAll?page=1&size=20", requestOptions)
            .then((response) => {
                return response.json().then(data => {
                    if (data.code===200){
                        //console.log(data.data)
                        return data.data;
                    }
                })
                
            })
            .catch(error => console.log('error', error));
            this.setState({
                total:data.total,
                info:data.list,
                currentPage:1
            })
    }

    itemOnClick(key){
        this.props.history.push({
            pathname:'../test',
            state:{
                'uuid':key
            }
        })
    }
    changePage(page,pageSize){
        console.log(page)
    }
    displayRender(label){
        return label[label.length - 1];
    }
    setMin(number){
        console.log(number)
        this.setState({minPrice:number})
    }
    setMax(number){
        this.setState({maxPrice:number})
    }
    render() {
        const { total, defaultPageSize, current,info,options,minPrice,maxPrice} = this.state;
        const ListCards = info.map((iteminfo)=>
            <Col span={4}>
                <div onClick={this.itemOnClick.bind(this, iteminfo.uuid)}>
                    <ItemCard key={iteminfo.uuid} image={JSON.parse(iteminfo.image)[0]} price={iteminfo.price} name={iteminfo.name}/>
                </div>
            </Col>
        );
        return(
            <div className="site-card-wrapper" style={{ padding: '50px 50px' }}>
                <Collapse>
                    <Panel header="筛选" key="1">
                    <Row gutter={32}>
                        <Col>
                            <Input placeholder="商品名"/>
                        </Col>
                        <Col>
                            <Cascader
                                options={options}
                                expendTrigger="hover"
                                placeholder="品类"
                                displayRender={this.displayRender.bind(this)}
                            />
                        </Col>
                        <Col>
                        </Col>
                        <Col>
                            <div>价格区间</div>
                        </Col>
                        <Col>
                            <InputNumber
                                min={0}
                                max={0x3FFFFFFFF}
                                defaultValue={0}
                                onChange={this.setMin.bind(this)}
                            />
                        </Col>
                        <Col>
                            <p>-</p>
                        </Col>
                        <Col>
                            <InputNumber
                                min={0}
                                max={0x3FFFFFFFF}
                                defaultValue={0}
                                onChange={this.setMax.bind(this)}
                            />
                        </Col> 
                    </Row>
                </Panel>
                </Collapse>
                
                <Divider/>
                <Row gutter={16}>
                    {ListCards}
                </Row>
                <Divider/>
                <Pagination
                    total = {total}
                    showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                    defaultPageSize={defaultPageSize}
                    defaultCurrent={1}
                    onChange={this.changePage.bind(this)}
                />
            </div>
        )
    }
}

export default ItemList;