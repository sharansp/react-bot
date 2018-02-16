import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
// import { createStore } from 'redux'
//import createStore from './store'
import registerServiceWorker from './registerServiceWorker';

//let store = createStore(todoApp)
//let store = createStore(commonReducer)

ReactDOM.render(
  
    <App dialogflow={{accessToken: '8bf5ded5496e4b528209b96b2d3b12d8'}}
    isVisible={true}
    ref={el => this.chat = el} />,
  document.getElementById('root')
)
registerServiceWorker();
