import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import Main from './containers/Main'

class MyWebsite extends Component {
  render() {
    return (
      // <BrowserRouter basename="/my-app">
			<BrowserRouter>
        <div className="website">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default MyWebsite;
