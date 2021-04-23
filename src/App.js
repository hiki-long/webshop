import './App.css';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import LoginForm from './views/login/LoginForm'
import Home from './views/shop/Home'
import Navigate from './views/shop/Navigate';
import LoginShow from './views/login/LoginShow';
import RegisterShow from './views/login/RegisterShow';


function App() {
  return (
    <div className="App">
      <Navigate />
      <BrowserRouter>
          <Route component={Home} exact path="/" />
          <Route component={LoginShow} path="/login" />
          <Route component={RegisterShow} path="/register" />
      </BrowserRouter>
    </div>
      
  );
}

export default App;
