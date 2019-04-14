import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class Article extends Component {
    render() {
      const ArTitle = ["My first day to school","good songs make me cry"]
      const lists = ArTitle.map((i, index) => (
        <li key={index}>
           <NavLink  to={"/article/" + index} ><h3>{i}</h3></NavLink>
        </li>));
      return (
        <div>
          {lists}
        </div>
          );
    }
  }