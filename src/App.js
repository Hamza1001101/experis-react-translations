import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";

import HomePage from "./components/Homepage/HomePage";
import Header from "./components/Header/Header";
import Translation from "./components/Translation/Translation";

import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route exact path="/">
            <Redirect to="/homepage" />
          </Route>
          <Route path="/homepage" component={HomePage} />

          <Route path="/translate" component={Translation} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
