import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import NavContainer from "./navigation/nav-links-container";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";


export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <NavContainer />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </Router>

        
      </div>
    );
  }
}
