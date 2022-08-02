import React, { Component } from 'react';
import TodoItem from './TodoItem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Header extends Component {
  render() {
    return (
    <nav>
      <Route>
        <ul>
          <li><Link to ='/'>Home</Link></li>
          <li><Link to ='/about'>about</Link></li>
        </ul>
      </Route>
    </nav>
    )
  }
}

export default Header