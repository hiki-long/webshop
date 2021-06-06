import React from 'react';
import { Button, Space,Pagination,Divider, Empty } from 'antd';
import ShoppingCartItemInfo from './ShoppingCartItemInfo';
import { SubmitCart } from '../../api/cart';

class ShoppingCart extends React.Component {
    
    state = {
      items:[],
      selectList:new Map()
    }

    async componentDidMount() {
      //测试语句，需要删除
      this.state.selectList.set("sdlfjfsl", 1);

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
        items:JSON.parse(data)
      })     
    }

    onBuy(){
    const data = {
      wishlist: [...this.state.selectList]
    }
      let res = SubmitCart(data);
      // if (res != null) {
      //   this.props.history.push({
      //     pathname:'../order',
      //     state:{
      //         'info': this.state.selectList
      //     }
      // })
      // }
      console.log(this.state.selectList)
    }

    //uuid对应商品数量
    onSelect = (select,id,num) => {
      if(select!==false){
        this.state.selectList.set(id,num);
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
        {this.state.items.length === 0 ? <Empty /> : <Iteminfo />}
        {/* {Iteminfo} */}
            <Space>
                <Button type="default" onClick={this.onDeleteItem}>删除选中</Button>
                {/* <Button type="primary" onClick={this.onBuy.bind(this)} disabled={this.state.items.length > 0 ? '' : 'disabled'}>购买</Button>  */}
                <Button type="primary" onClick={this.onBuy.bind(this)}>购买</Button> 
            </Space>
            <Divider/>
        </div>
        );
    }
}

export default ShoppingCart;