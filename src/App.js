import './App.css';
import { Switch, Route, Router, HashHistroy, Link, HashRouter } from 'react-router-dom';
import Login from './views/login/Login'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route component={Login} path="/" />
        </Switch>
      </HashRouter>
    </div>
      
  );
}

export default App;
