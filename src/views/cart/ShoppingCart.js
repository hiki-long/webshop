import React from 'react';
import { Button, Space,Pagination,Divider, Empty } from 'antd';
import ShoppingCartItemInfo from './ShoppingCartItemInfo';
import { SubmitCart } from '../../api/cart';
import { SubmitOrder } from '../../api/order';

class ShoppingCart extends React.Component {
    
    state = {
      items:[],
      selectList:new Map()
    }

    async componentDidMount() {
      this.setState({
        items: []
      })
      let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        credentials: 'include',
        'Access-Control-Allow-Credentials':'true',
      };
      const data = await fetch("http://localhost:8089/wishlist/listItem",requestOptions)
        .then((response) =>{
          return response.json().then(data => {
            if(data.code===200){
              return data.data;
            }
          })
        })
        .catch(error=> console.log('error', error));
      this.setState({
        items: JSON.parse(data)
      })
    }

    onBuy(){
      const data = [...this.state.selectList];
      // let res = SubmitCart(data);
      // if (res != null) {
      //   this.props.history.push({
      //     pathname:'../order',
      //     state:{
      //         'info': this.state.selectList
      //     }
      // })
      // }
      let params = [];
      for(var [key, value] of data) {
        const temp = {
          itemUUID: key,
          number: value.number,
          owner: value.owner,
        }
        params.push(temp);
      }
      console.log(params);
      SubmitOrder(params);
      // console.log(this.state.selectList)
    }

    onDeleteItem() {
      const data = [...this.state.selectList];
      console.log(data);
    }

    //uuid对应商品数量
    onSelect = (select,id,num,own) => {
      if(select!==false){
        this.state.selectList.set(id,{
          itemUUID: id,
          number: num,
          owner: own,
          buyer: "408b1cfb-ce0f-4f41-b773-e916378e35f5",
        });
      }
      else{
        this.state.selectList.delete(id);
      }      
    }

    render() {
        const { total,currentPage,items } = this.state;
        const Iteminfo = items.map((iteminfo) =>
          <ShoppingCartItemInfo key={iteminfo.id} uuid={iteminfo.id} num={iteminfo.num} onSelect={this.onSelect}/>
        );
        return (
        <div>
        {this.state.items.length === 0 ? <Empty /> : Iteminfo}
            <Space>
                <Button type="default" onClick={this.onDeleteItem}>删除选中</Button>
                <Button type="primary" onClick={this.onBuy.bind(this)} disabled={this.state.items.length > 0 ? '' : 'disabled'}>购买</Button> 
            </Space>
            <Divider/>
        </div>
        );
    }
}

export default ShoppingCart;