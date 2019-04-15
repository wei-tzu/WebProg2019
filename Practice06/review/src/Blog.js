import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'

import './Blog.css';
import Posts from './Post';
import PostDetail from './PostDetail';

import hello from './hello.png';

class Blog extends Component {
  render() {
    return (
    <div>
      <Header />
      <Switch>
          <Route exact path="/posts" component={Posts} />
          <Route path="/posts/:id?" component={PostDetail} />
          <Route exact path="/" component={Home} />
          <Redirect from="/Home" to="/" />
      </Switch>

    </div>
    );
  }
}
export default Blog;

class Home extends Component {
  render() {
    return(
      <div>
        <h1> Welcome to my Blog!</h1>
        <img src={hello} className="helloImg"></img>
      </div>
      
    );
  }
}


class Header extends Component {
  render() {
    return (
      <div className="nav-bar">
        <img
          src="https://avatars0.githubusercontent.com/u/2062925"
          alt="random logo"
          className="logo"
        />
        <h1 className="brand"><NavLink to="/home" className="headerButt">My React Blog</NavLink></h1>
        {/* <NavLink to="/account" className="headerButt">Account</NavLink> &nbsp;&nbsp; */}
        <NavLink to="/posts" className="headerButt">Posts</NavLink>

      </div>
    );
  }
}

