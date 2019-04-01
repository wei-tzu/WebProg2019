import React from 'react';
import Button from '../components/Button';
import x from '../img/x.png';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: false};
    
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: !this.state.value}, () => {this.props.handleComplete2(this.state.value);});
        // this.props.handleComplete2(this.state.value);
    }
    render() {
        return (
            <li className="todo-app__item" key={this.props.num}>
                <div className="todo-app__checkbox">
                    <input type="checkbox" id={this.props.num} value={this.state.value} 
                                                onChange={this.handleChange}></input>
                    <label htmlFor={this.props.num}></label>
                </div>
                <h1>{this.props.word}</h1>
                <img src={x} className="todo-app__item-x"></img>
            </li>
        )
    }
}
