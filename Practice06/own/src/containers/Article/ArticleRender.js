import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Article from "../../component/Article"
export default class PostRender extends Component {
    render() {
        const ArTitle = ["My first day to school","good songs make me cry"]
        const { id } = this.props.match.params;
        return id ? (
            <Article id={id} title={ArTitle[id]}/>
        ) : (
            <div>
                <h3>Error: Post #{id} NOT FOUND</h3>
            </div>
        );
    }
}