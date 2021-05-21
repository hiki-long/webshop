import React from 'react';
import { Card, Col, Row,Layout,Pagination,Button,Collapse,Cascader,Divider,InputNumber,Input} from 'antd';
import ItemCard from './ItemCard'
const { Panel } = Collapse;
class ItemList extends React.Component{
    state = {
        total:3,
        defaultPageSize:20,
        currentPage:1,
        info:
            [
                {
                    "uuid":1,
                    "name":"test1",
                    "image":'http://image.uc.cn/s/wemedia/s/upload/2020/e3466f09e4bc2b32558be930245a2454.jpg',
                    "price":19.99
                },
                {
                    "uuid":2,
                    "name":"test2",
                    "image":'http://image.uc.cn/s/wemedia/s/upload/2020/e3466f09e4bc2b32558be930245a2454.jpg',
                    "price":29.99
                },
                {
                    "uuid":3,
                    "name":"test3",
                    "image":'http://image.uc.cn/s/wemedia/s/upload/2020/e3466f09e4bc2b32558be930245a2454.jpg',
                    "price":39.99
                }
            ],
        options:[
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [
                {
                  value: 'hangzhou',
                  label: 'Hangzhou',
                  children: [
                    {
                      value: 'xihu',
                      label: 'West Lake',
                    },
                  ],
                },
              ],
            },
            {
              value: 'jiangsu',
              label: 'Jiangsu',
              children: [
                {
                  value: 'nanjing',
                  label: 'Nanjing',
                  children: [
                    {
                      value: 'zhonghuamen',
                      label: 'Zhong Hua Men',
                    },
                  ],
                },
              ],
            },
          ],
        minPrice:-1,
        maxPrice:0x3FFFFFFFF
    }
    itemOnClick(key){
        console.log(key)
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
                    <ItemCard key={iteminfo.uuid} image={iteminfo.image} price={iteminfo.price} name={iteminfo.name}/>
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
                            <p>价格区间</p>
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
                    defaultCurrent={current}
                    onChange={this.changePage.bind(this)}
                />
            </div>
        )
    }
}

export default ItemList;