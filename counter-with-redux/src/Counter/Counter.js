import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component{
  constructor(props){
    super(props);
    this.state ={ counter :0};
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(){
      this.setState( (prevState,props) =>{
        return {counter : prevState.counter +1};
      });
  }

  decrement(){
      this.setState(  (prevState,props) =>{
          return { counter : prevState.counter -1};
      });
  }

  render(){
    return(
      <div className="AppBox">
        <center> <h1> Counter </h1> </center>
        <hr/>
        <button className="btn" onClick={this.decrement} >  -  </button>
        <div className="viewCounter" > {this.state.counter}  </div>
        <button className="btn" onClick={this.increment}>  +  </button>
      </div>
    );
  }
}

export default Counter;
