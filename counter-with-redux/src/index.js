import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import  Counter  from './Counter/Counter.js';
// import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  count : 0
}

function reducer(state = initialState,action){

  console.log(action.type);
  switch (action.type) {
    case "INCREMENT" :
          return {
            count : state.count + 1
          }

    case "DECREMENT" :
          return {
            count : state.count - 1
          }
    default:
          return state;
  }

}

const store = createStore(reducer);

const App = () =>{
  return(
    <div>
      <Provider store = {store}>
        <Counter/>
      </Provider>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
