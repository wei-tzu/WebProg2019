import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card'

const leftCardData = [[
    {tag:"h2", content:"TITLE HEADING"},
    {tag:"h5", content:"Title description, Dec 7, 2017"},
    {tag:"img", content:"./logo.svg"},
    {tag:"p", content:"Some text.."},
    {tag:"p", content:"Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."}
],
[
    {tag:"h2", content:"TITLE HEADING"},
    {tag:"h5", content:"Title description, Dec 7, 2017"},
    {tag:"img", content:"./logo.svg"},
    {tag:"p", content:"Some text.."},
    {tag:"p", content:"Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."}
]]
const rightCardData =[[
    {tag:"h2", content:"About me"},
    {tag:"img", content:"anything"},
    {tag:"p", content:"Some text about me in culpa qui officia deserunt mollit anim.."}
],
[
    {tag:"h2", content:"Popular Post"},
    {tag:"img", content:"anything"},
    {tag:"img", content:"anything"},
    {tag:"img", content:"anything"}
],
[
    {tag:"h2", content:"Follow Me"},
    {tag:"p", content:"Some text..."}
]]
ReactDOM.render(<Card data={leftCardData}/>,document.getElementById('leftcolumn'))
ReactDOM.render(<Card data={rightCardData}/>,document.getElementById('rightcolumn'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

