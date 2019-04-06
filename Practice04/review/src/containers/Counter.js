import React from 'react';
import Button from '../components/Button.js';
import Input from '../components/Input.js';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {number: 100};
    }
    add = () => {
        this.setState({number: this.state.number + 1});
    }
    minus = () => {
        this.setState({number: this.state.number - 1});
    }
    setNumber = num => this.setState(() => ({ number: num }));
    handleInput = e => {
        if (e.key === "Enter") {
            const value = parseInt(e.target.value);
            if (value === 0 || value) this.setNumber(value);
            e.target.value = "";
            e.target.blur();
        }
    };
    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <span>
                    <Button text="+" onClick={this.add} />
                    <Button text="-" onClick={this.minus} />
                    <Input onKeyPress={this.handleInput} />
                </span>
            </div>
        )
    }
}