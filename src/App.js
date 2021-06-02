import './App.css';
import { Switch, Route, Link, BrowserRouter,HashRouter } from 'react-router-dom';
import Home from './views/shop/Home'
import Navigate from './views/shop/Navigate';
import LoginShow from './views/login/LoginShow';
import RegisterShow from './views/login/RegisterShow';
import UpdateBasic from './views/shop/UpdateBasic';
import ShowUpload from './views/shop/ShowUpload';
import moment from 'moment';
import 'moment/locale/zh-cn';
import UserPage from './views/user/UserPage';
import ForgetShow from './views/login/ForgetShow';
import Test from './views/shop/Test';
import ItemList from './views/itemlist/ItemList';
import ShoppingCart from './views/cart/ShoppingCart';
import OrderList from './views/order/OrderList';

function App() {
  moment.locale('zh-cn');
  return (
    <div className="App">
        <BrowserRouter >
        <Navigate />
          <Route component={Home} exact path="/" />
          <Route component={ShowUpload} exact path="/itemUploadResult" />
          <Route component={LoginShow} path="/login" />
          <Route component={RegisterShow} path="/register" />
          <Route component={UpdateBasic} path="/itemUpload" />
          <Route component={UserPage} path="/user" />
          <Route component={ForgetShow} path="/forget" />
          <Route component={Test} path="/test" />
          <Route component={ItemList} path="/itemList"/>
          <Route component={ShoppingCart} path="/shoppingcart"/>
          <Route component={OrderList} path="/order" />
      </BrowserRouter>
      
    </div>
      
  );
}

export default App;
