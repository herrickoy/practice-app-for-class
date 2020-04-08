import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class NavContainer extends Component {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

  render() {
      return (
              
      <div className="nav-wrapper">
        <div className="nav-links">
          <NavLink exact to="/">HOME</NavLink>
        </div>
        <div className="nav-links">
          <NavLink to="/about">ABOUT</NavLink>
        </div>
        <div className="nav-links">
          <NavLink to="/">CONTACT</NavLink>
        </div>
          
      </div>
      )
  }
}