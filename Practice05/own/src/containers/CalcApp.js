import React from 'react';

import CalcButton from '../components/CalcButton';

// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display:0,
      pre_num:0,
      oper:'',
      operating:false
      
    };
  }

  resetState = () => {
    this.setState((state,props) => ({
      display:0
    }));
  }
  number = (num) => {
    if(this.state.operating == false){
      this.setState((state,props) => ({
        display:state.display * 10 + num
      }));
    }
    else{
      this.setState((state,props) => ({
        display:num
      }));
    }
    
    
  }
  operator = (oper) => {
    if(oper == '='){
      if(this.state.oper == "+"){
        this.setState((state,props) => ({
          display: state.display + state.pre_num,
        }));
      }
      else if(this.state.oper == "-"){
        this.setState((state,props) => ({
          display: state.pre_num - state.display,
        }));
      }
      else if(this.state.oper == "x"){
        this.setState((state,props) => ({
          display: state.display * state.pre_num,
        }));
      }
      else if(this.state.oper == "÷"){
        this.setState((state,props) => ({
          display: state.pre_num / state.display,
        }));
      }
      this.setState((state,props) => ({
        operating:false
      }));
    }
    
    else{
      this.setState((state,props) => ({
        pre_num:state.display,
        oper:oper,
        operating:true
      }));
      
      
    }
    
    
  }

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{this.state.display}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState} children='AC'></CalcButton>
            <CalcButton onClick={this.showNotImplemented} children="+/-"></CalcButton>
            <CalcButton onClick={this.showNotImplemented} children="%"></CalcButton>
            <CalcButton className="calc-operator" children="÷" onClick={() => (this.operator('÷'))}></CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" children='7' onClick={() => (this.number(7))}></CalcButton>
            <CalcButton className="calc-number" children='8' onClick={() => (this.number(8))}></CalcButton>
            <CalcButton className="calc-number" children='9' onClick={() => (this.number(9))}></CalcButton>
            <CalcButton className="calc-operator" children='x' onClick={() => (this.operator('x'))}></CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" children='4' onClick={() => (this.number(4))}></CalcButton>
            <CalcButton className="calc-number" children='5' onClick={() => (this.number(5))}></CalcButton>
            <CalcButton className="calc-number" children='6' onClick={() => (this.number(6))}></CalcButton>
            <CalcButton className="calc-operator" children='-' onClick={() => (this.operator('-'))}></CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" children='1' onClick={() => (this.number(1))}></CalcButton>
            <CalcButton className="calc-number" children='2' onClick={() => (this.number(2))}></CalcButton>
            <CalcButton className="calc-number" children='3' onClick={() => (this.number(3))}></CalcButton>
            <CalcButton className="calc-operator" children='+' onClick={() => (this.operator('+'))}></CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" children='0' onClick={() => (this.number(0))}></CalcButton>
            <CalcButton className="calc-number"></CalcButton>
            <CalcButton className="calc-number" children='.'></CalcButton>
            <CalcButton className="calc-operator" children='=' onClick={() => (this.operator('='))}></CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
