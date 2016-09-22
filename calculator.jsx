import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      num1: '',
      num2: ''
    };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.addNum = this.addNum.bind(this);
    this.subtractNum = this.subtractNum.bind(this);
    this.multiplyNum = this.multiplyNum.bind(this);
    this.divideNum = this.divideNum.bind(this);

  }

  setNum1(event) {
    return (event => this.setState({num1: event.currentTarget.value}));
  }

  setNum2(event) {
    return (event => this.setState({num2: event.currentTarget.value}));
  }

  addNum(event) {
    return (event) => {
      event.preventDefault();
      this.setState({result: parseInt(this.state.num1) + parseInt(this.state.num2)});
    }
  }

  subtractNum(event) {
    return (event) => {
      event.preventDefault();
      this.setState({result: parseInt(this.state.num1) - parseInt(this.state.num2)});
    };
  }

  multiplyNum(event) {
    return (event) => {
      event.preventDefault();
      this.setState({result: parseInt(this.state.num1) * parseInt(this.state.num2)});
    };
  }

  divideNum(event) {
    return (event) => {
      event.preventDefault();
      this.setState({result: parseInt(this.state.num1) / parseInt(this.state.num2)});
    };
  }

  clear(event) {
    return (event) => {
      event.preventDefault();
      this.setState({result: 0, num1: '', num2: ''});
    };
  }

  render() {
    const {result, num1, num2} = this.state;
    return (
      <div>
        <h1>{result}</h1>
        <input onChange={this.setNum1()} value={num1}/>
        <input onChange={this.setNum2()} value={num2}/>
        <br></br>
        <button onClick={this.addNum()}>Add</button>
        <button onClick={this.subtractNum()}>Subtract</button>
        <button onClick={this.multiplyNum()}>Multiply</button>
        <button onClick={this.divideNum()}>Divide</button>
        <br></br>
        <button onClick={this.clear()}>Clear</button>
      </div>
    );
  }
}

export default Calculator;
