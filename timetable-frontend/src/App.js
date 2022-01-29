import Login from './components/Login.js';
import Sign from './components/Sign.js';
import Register from './components/Register.js';
import Admin from './Admin.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/" component={Sign} ></Route>
          <Route exact path="/login"  component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/admin" component={Admin}></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
