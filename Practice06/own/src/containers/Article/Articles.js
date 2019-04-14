import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class Article extends Component {
    render() {
      const ArTitle = ["My first day to school","good songs make me cry"]
      const lists = ArTitle.map((i, index) => (
        <h3><li  key={index}>
           <NavLink style={{color: "#000000"}} to={"/article/" + index}>{i}</NavLink>
        </li></h3>));
      return (
        <div>
          <span class="heading-meta">Article</span>
          <h2 class="colorlib-heading"></h2>
          <ul>{lists}</ul>
        </div>
          );
    }
  }