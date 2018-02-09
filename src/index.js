import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<App dialogflow={{accessToken: '8bf5ded5496e4b528209b96b2d3b12d8'}}
    dialogHeightMax={350}
    isUserHidden={true}
    isVisible={true}
    ref={el => this.chat = el} />, 

document.getElementById('root')

);
registerServiceWorker();
