import Admin from "./components/admin";
import User from "./components/user";
import Login from "./components/login"
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Switch>
          <Route path="/evolvFchallenge/" exact component={Login} />
          <Route path="/evolvFchallenge/admin" exact component={Admin} />
          <Route path="/evolvFchallenge/user" exact component={User} />
          <Route>
            <button><Link to="/evolvFchallenge/">Go back to homepage</Link></button>
            <img src='https://cdn.mos.cms.futurecdn.net/PuXipAW3AXUzUJ4uYyxPKC-1200-80.jpg' style={{maxWidth: '100%', height: 'auto'}}/>            
            </Route>
        </Switch>
    </Router>
    </Provider>
  );
}

export default App;
