import React, { Component } from 'react';
import './Counter.css';
import { connect } from 'react-redux';
import './Counter.css';
import  { incrementFunc, decrementFunc } from '../Action/Action.js';

class Counter extends Component{
  constructor(props){
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(){
    this.props.dispatch(incrementFunc());
  }

  decrement(){
    this.props.dispatch(decrementFunc());
  }

  render(){
    return(
      <div className="AppBox">
        <center> <h1> Counter </h1> </center>
        <hr/>
        <button className="btn" onClick={this.decrement} >  -  </button>
        <div className="viewCounter" > {this.props.count}  </div>
        <button className="btn" onClick={this.increment}>  +  </button>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
      count: state.count
  }
}
export default connect(mapStateToProps)(Counter);
