import './App.css';
import { Switch, Route, Router, HashHistroy, Link, HashRouter } from 'react-router-dom';
import Login from './views/login/Login'
import Register from './views/login/Register'
import LoginForm from './views/login/LoginForm'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route component={LoginForm} path="/" />
        </Switch>
      </HashRouter>
    </div>
      
  );
}

export default App;
