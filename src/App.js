import './App.css';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './views/shop/Home'
import Navigate from './views/shop/Navigate';
import LoginShow from './views/login/LoginShow';
import RegisterShow from './views/login/RegisterShow';
import UpdateBasic from './views/shop/UpdateBasic';
import ShowUpload from './views/shop/ShowUpload';
import moment from 'moment';
import 'moment/locale/zh-cn';

function App() {
  moment.locale('zh-cn');
  return (
    <div className="App">
      <Navigate />
      <BrowserRouter>
          <Route component={Home} exact path="/" />
          <Route component={ShowUpload} exact path="/itemUpload" />
          <Route component={LoginShow} path="/login" />
          <Route component={RegisterShow} path="/register" />
          <Route component={UpdateBasic} path="/itemInfo" />
      </BrowserRouter>
    </div>
      
  );
}

export default App;
