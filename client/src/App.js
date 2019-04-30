import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import logo from './logo.svg';
// import './App.css';
import Nav from "./components/Nav";
import Home from "./pages/HomePage";
import AddUtilities from "./pages/AddUtilities"
import NoMatch from "./pages/NoMatch";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          {/* Main route looking up book followed by book in db database */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/addutilities" component={AddUtilities} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
