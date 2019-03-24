import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 
class Website extends Component {
  render() {
    return (
        <div id="colorlib-page">
          <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
          <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
            <h1 id="colorlib-logo"><a href="index.html">Balay</a></h1>
            <nav id="colorlib-main-menu" role="navigation">
              <ul>{this.props.menu.map( e => <li><a>{e}</a></li>)}</ul>
            </nav>
          </aside>
        </div>
    );
  }
}

export default Website;
