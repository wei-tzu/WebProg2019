import React from 'react';
import Button from '../components/Button'

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer className="todo-app__footer" id="todo-footer">
                <div className="todo-app__total">
                    <p id="left">{this.props.num} left</p>
                </div>
                <ul className="todo-app__view-buttons">
                    <Button id="all" text="All" onClick={() => this.props.handleAll()}/>
                    <Button id="actived" text="Actived" onClick={() => this.props.handleActived()}/>
                    <Button id="completed" text="Completed" onClick={() => this.props.handleComplete()}/>
                </ul>
                <div className="todo-app__clean">
                    <Button id="clear" text="Clear Completed" onClick={() => this.props.handleClear()}/>
                </div>
            </footer>
        )
    }
}
