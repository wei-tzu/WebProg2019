import React from 'react';
import '../styles.css';
import Input from '../components/Input.js';
import Item from '../components/Item';
import Footer from './Footer'
import { S_IWOTH } from 'constants';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {num: 0,
                      list: [],
                      itemBool: false,
                      showList: []
                    };
    }
    handleComplete2 (temp) {
        this.setState({itemBool: temp})
    }
    handleInput = e => {
        if (e.key === "Enter") {
            const word = e.target.value.trim();
            if (word != ""){
                e.target.value = "";
                const a = {node:<Item num={this.state.num} word={word} handleComplete2={(text) => this.handleComplete2(text)}/>
                                                        , isComplete: this.state.itemBool};
                console.log(a.isComplete);                                     
                this.setState({list: this.state.list.concat([a])})
                this.setState({num: this.state.num + 1}, () => {this.setState({showList: this.state.list.map(function(item, i){
                    return <div key={i}>{item.node}</div>;
                })})});
            }
        }
    };

    render() {
        let handleAll = () => {
            this.setState({showList: this.state.list.map(function(item, i){
                console.log(item.isComplete);
                return <div key={i}>{item.node}</div>;
            })});
            console.log(this.state.showList);
        }
        let handleActived = () => {
            this.setState({showList: this.state.list.map(function(item, i){
                if (!item.isComplete)
                    return <div key={i}>{item.node}</div>;
            })});
            console.log(this.state.showList);
        }
        let handleComplete = () => {
            this.setState({showList: this.state.list.map(function(item, i){
                if (item.isComplete)
                    return <div key={i}>{item.node}</div>;
            })});
            console.log(this.state.showList);
        }
        let handleClear = () => {
            this.setState({showList: this.state.list.map(function(item, i){
                return <div key={i}>{item.node}</div>;
            })});
            console.log(this.state.showList);
        }
        return (
            <div className="todo-app__root">
                <header className="todo-app__header">
                    <h1 className="todo-app__title">todos</h1>
                </header>
                <section className="todo-app__main">
                    <Input onKeyPress={this.handleInput}/>
                    <ul className="todo-app__list">
                        {this.state.showList}
                    </ul>
                </section>
                <Footer num = {this.state.num} list = {this.state.list} 
                        handleAll={handleAll}
                        handleActived={handleActived}
                        handleComplete={handleComplete}
                        handleClear={handleClear}/>
            </div>
        )
    }
}