import './App.css';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './views/shop/Home'
import Navigate from './views/shop/Navigate';
import LoginShow from './views/login/LoginShow';
import RegisterShow from './views/login/RegisterShow';
import UpdateBasic from './views/shop/UpdateBasic';


function App() {
  return (
    <div className="App">
      <Navigate />
      <BrowserRouter>
          <Route component={Home} exact path="/" />
          <Route component={LoginShow} path="/login" />
          <Route component={RegisterShow} path="/register" />
          <Route component={UpdateBasic} path="/home" />
      </BrowserRouter>
    </div>
      
  );
}

export default App;
