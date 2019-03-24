import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Website from './App';
import * as serviceWorker from './serviceWorker';
const menu = ['Home','Project','About','Experience','Interest']
ReactDOM.render(<Website menu = {menu} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
