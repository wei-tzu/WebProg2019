import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { NavLink, Switch, Route } from 'react-router-dom'
import Blog from './Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Blog />
      </BrowserRouter>
    );
  }
}
export default App;