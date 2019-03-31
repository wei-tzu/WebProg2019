import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './component/Input'
import Column from './container/Column'
import Button from './component/Button'
import { all } from 'q';
class Frame extends Component {
  constructor(props) {
    super(props);
    this.list = []
    this.adjustList = []
    this.state = {count:0, list:this.list, adjustList: this.adjustList}

  }
  addList = (e) => {
    if(e.key === "Enter"){
      const input_value = e.target.value
      if(input_value != ''){
        const newItem = {value: input_value, isComplete: false, id:this.count, style:{}};
        this.list.push(newItem)
        this.setState({list:this.list,count:this.count + 1,adjustList:this.list});
      }
    }
  }
  display = (type) => {
  }
  delete = (text) => {

  }
  render() {
    return (
      <div className="todo-app__root">
            <header class="todo-app__header">
                <div class = "todo-app__title">todos</div>
            </header>
            <section class = "todo-app__main">
              <Input onKeyPress = {e => this.addList(e)} id="todo_input" placeholder="What needs to be done ?" ></Input>
              <Column list = {this.state.adjustList}></Column>
            </section>

            <footer class="todo-app__footer" id="todo-footer">
                <div class = "todo-app__total">
                    <p id="todo-count">0 left</p>
                </div>
                <ul class = "todo-app__view-buttons">
                    <li> <Button text = "All" onClick = {this.display('all')} ></Button></li>
                    <li> <Button text = "Active" onClick = {this.display('active')} ></Button></li>
                    <li> <Button text = "Completed" onClick = {this.display('comp')} ></Button></li>
                </ul>
                <div class="todo-app__clean">
                    <Button text = "Clear" onClick = {this.display('comp')} ></Button>
                </div>
            </footer>
        </div>
    );
  }
}

export default Frame;
