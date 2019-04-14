import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class Posts extends Component {
    render() {
      const postIDs = ["1", "3", "5", "7", "9"];
      const lists = postIDs.map((i, index) => (
        <li key={index}>
          <NavLink class="">Posts {i}</NavLink>
        </li>));
      return (
        <div>
          <h3>{lists}</h3>
        </div>);
    }
  }