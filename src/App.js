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
import ScrollToTop from './views/utils/ScrollToTop'
import ManagerHome from './views/manager/ManagerHome';
import VisualMain from './views/visual/VisualMain';
import ManagerMainPage from './views/manager/ManagerMainPage';
import ProductIndex from './views/manager/ProductIndex';
import OrderIndex from './views/manager/OrderIndex';
import UserIndex from './views/manager/UserIndex';
import ManagerSider from './views/manager/ManagerSider';

function App() {
  moment.locale('zh-cn');
  return (
    <div className="App">
        <BrowserRouter >
        <ScrollToTop>
          <Navigate />
            <Route component={Home} exact path="/" />
            <Route component={LoginShow} path="/login" />
            <Route component={RegisterShow} path="/register" />
            <Route component={UserPage} path="/user" />
            <Route component={ForgetShow} path="/forget" />
            <Route component={Test} path="/test" />
            <Route component={ItemList} path="/itemList"/>
            <Route component={ShoppingCart} path="/shoppingcart"/>
            <Route component={OrderList} path="/order" />
            <Route component={ManagerHome} path="/manage" />
            <Route component={VisualMain} path="/visual" />
            <Route component={ManagerSider} path={["/manage" , "/product-index", "/order-index", "/user-index", "/itemUpload", "/showupload"]} />
        </ScrollToTop>
      </BrowserRouter>
      
    </div>
      
  );
}

export default App;
