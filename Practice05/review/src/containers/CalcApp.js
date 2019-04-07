import React from 'react';

import CalcButton from '../components/CalcButton';

// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: 0,
      number2: 0,
      operator1:"",
      operator2:"",
      number_result: 0,
      number_show: 0,
      operator_temp: "",
      number_temp: ""
    };
  }

  resetState = () => this.setState(
    state => (
        { 
        number1: 0,
        number2: 0,
        operator1:"",
        operator2:"",
        number_result: 0,
        number_show: 0,
        operator_temp: "",
        number_temp: ""
        })
    );

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }

  inputNumber = e => {
    var value = parseInt(e.target.innerHTML);
    this.numberHandler(value);
  }

  numberHandler(value){
    if (this.state.operator1===""){
        this.setState(() => ({
            number1:      this.state.number1*10+value,
            number_show:  this.state.number1*10+value
        }));
    }
    else if (this.state.operator1 ==="=" && this.state.number2===0){
        this.setState(() => ({
            number2:      value,
            number_show:  value,
            number_result: value,
        }));
    }
    else if (this.state.operator1 ==="=" && this.state.number2!==0){
        this.setState(() => ({
            number2:      this.state.number2*10+value,
            number_show:  this.state.number2*10+value,
            number_result: this.state.number2*10+value,
        }));
    }
    else if (this.state.number1 === 0 && this.state.operator1!==""){
        this.setState(() => ({
            number_show:  value,
            number1:  0,
            number2:  value,   
        }));
    }
    else if (this.state.operator1!=="" && this.state.operator2===""){
        this.setState(() => ({
            number2:      this.state.number2*10+value,
            number_show:  this.state.number2*10+value
        }));
    }
  }

  inputOperator = e => {
    var opt = e.target.innerHTML;
    this.optHandler(opt);
  }

  optHandler(opt){
    if (this.state.operator1 === "" && this.state.number1 === 0 && this.state.number2===0){
        this.setState(() => ({
            operator1: opt,
            operator_temp: "",
        }));
    }
    else if (this.state.number1 !== 0 && this.state.number2===0){
        this.setState(() => ({
            operator1: opt,
            operator_temp: "",
        }));
    }
    else if (this.number2!==0){
        var result = this.calculate_result();
        this.setState(() => ({
            operator2: "",
            operator1: opt,
            operator_temp: "",
            number_show: result,
            number2: 0
        }));
    }
  }

  calculate_result(){
    console.log("value1:", this.state.number1, ", value2:", this.state.number2)
    var result = 0;
    if      (this.state.operator1==="+"){result = this.state.number1+this.state.number2;}
    else if (this.state.operator1==="-"){result = this.state.number1-this.state.number2;}
    else if (this.state.operator1==="x"){result = this.state.number1*this.state.number2;}
    else if (this.state.operator1==="÷"){result = this.state.number1/this.state.number2;}
    this.setState(() => ({
        number_result: result, number1: result, number_show: result}));
    return result;
  }


  showResult = e => {
    if(this.state.operator1 === ""){
        this.setState(() => ({
            number_show: this.state.number1,
        }));
    }
    else if(this.state.operator1 !== "" && this.state.number2 === 0 && this.state.operator_temp===""){
        this.setState(() => ({
            number_show: this.state.number1,
        }));
    }
    else if (this.state.number2 !== 0 && this.state.operator_temp===""){
        var result = this.calculate_result();
        this.setState(() => ({
            operator_temp: this.state.operator1,
            number_temp: this.state.number2,
            operator1: "=",
            operator2: "",
            number2: 0,
        }));
    }
    else if (this.state.operator_temp!==""){
        this.staycalc();
        this.setState(() => ({
            operator1: "=",
            operator2: "",
        }));
    }
  }

  staycalc(){
    var temp = 0;
    if      (this.state.operator_temp==="+"){temp = this.state.number_result+this.state.number_temp;}
    else if (this.state.operator_temp==="-"){temp = this.state.number_result-this.state.number_temp;}
    else if (this.state.operator_temp==="x"){temp = this.state.number_result*this.state.number_temp;}
    else if (this.state.operator_temp==="÷"){temp = this.state.number_result/this.state.number_temp;}
    this.setState(() => ({
        number_result: temp, number1: temp, number_show: temp}));
  }

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{this.state.number_show}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState}>AC</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>%</CalcButton>
            <CalcButton children="÷" onClick={this.inputOperator} className="calc-operator" />
          </div>
          <div className="calc-row">
            <CalcButton children="7" onClick={this.inputNumber} className="calc-number" />
            <CalcButton children="8" onClick={this.inputNumber} className="calc-number" />
            <CalcButton children="9" onClick={this.inputNumber} className="calc-number" />
            <CalcButton children="x" onClick={this.inputOperator} className="calc-operator" />
          </div>
          <div className="calc-row">
            <CalcButton children="4" onClick={this.inputNumber} className="calc-number" />
            <CalcButton children="5" onClick={this.inputNumber} className="calc-number" />
            <CalcButton children="6" onClick={this.inputNumber} className="calc-number" />
            <CalcButton children="-" onClick={this.inputOperator} className="calc-operator" />
          </div>
          <div className="calc-row">
            <CalcButton children="1" onClick={this.inputNumber} className="calc-number" />
            <CalcButton children="2" onClick={this.inputNumber} className="calc-number" />
            <CalcButton children="3" onClick={this.inputNumber} className="calc-number" />
            <CalcButton children="+" onClick={this.inputOperator} className="calc-operator" />
          </div>
          <div className="calc-row">
            <CalcButton children="0" onClick={this.inputNumber} className="bigger-btn" />
            <CalcButton children="." onClick={this.showNotImplemented} className="calc-number" />
            <CalcButton children="=" onClick={this.showResult} className="calc-operator" />
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
