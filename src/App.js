import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import ReactBotUI from 'react-bot-ui';
import {ApiAiClient} from "api-ai-javascript";

class App extends Component {
  render() {  
    //8bf5ded5496e4b528209b96b2d3b12d8 ; stock available of 2C00020C-ROH in plant US45
    //26c99218affc4a08ae8ba1f520cd3a02 ; stock availibility for 108510-BULK in Warehouse W001
    const client = new ApiAiClient({accessToken: '8bf5ded5496e4b528209b96b2d3b12d8'});
    console.info(client);
    client.textRequest('Hello!')
          .then((response) => {console.log(response)/* do something */})
          .catch((error) => {console.log(error)/* do something here too */})
          
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       
      </div>
    );
  }
}

export default App;
