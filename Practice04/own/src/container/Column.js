import React, { Component } from 'react';
class Column extends Component {
    constructor(props) {
        super(props);
        this.state = {style:{}}
      }
    complete = (id) => {
    }
    render(){
        return (
            <ul className = "todo-app__list" id = "todo_list">
                {this.props.list.map((e,index) => 
                <li className = "todo-app__item">
                    <div className="todo-app__checkbox">
                        <input type = "checkbox" onClick={this.complete(index)}></input>
                        <label for= "0"></label>
                    </div>
                    <h1 id={index} style={this.state.style}>{e.value}</h1>
                    <img src={"./x.png"}/>
                </li>)}
            </ul>
        );
    }
};
export default Column;