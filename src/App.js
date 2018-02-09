import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {ApiAiClient} from "api-ai-javascript";
import Header from './components/Header';
import Dialog from './components/Dialog';
import Input from './components/Input';
import '../css/main.css';

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
      <div className="container" style={this.state.isVisible ? {display: 'block'} : {display: 'none'}}>
        <Header title={this.state.title}
                onClick={this.handleToggle} />
        <div style={this.state.isOpen ? {minHeight: `${this.state.dialogHeight}px`} : {maxHeight: 0, overflow: 'hidden'}}>
          <Dialog messages={this.state.messages}
                  isBotTyping={this.state.isBotTyping}
                  isUserHidden={this.props.isUserHidden}
                  dialogHeight={this.state.dialogHeight} />
          <Input onSubmit={this.handleSubmitText} />
        </div>
      </div>
    );
  }
}

export default App;
