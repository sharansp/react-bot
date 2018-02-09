import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {ApiAiClient} from "api-ai-javascript";
import Header from './components/Header';
import Dialog from './components/Dialog';
import Input from './components/Input';
import './css/main.css';

class App extends Component {

  constructor(props) {
    super(props);
    if (props.dialogflow) {
      this.dialogflow = new ApiAiClient(props.dialogflow);
    }
    this.botQueue = [];
    this.isProcessingQueue = false;
    this.state = {
      title: props.title || 'React Bot UI',
      messages: [],
      isBotTyping: false,
      isOpen: props.isOpen !== undefined ? props.isOpen : true,
      isVisible: props.isVisible !== undefined ? props.isVisible : true
    };

    // this.appendMessage = this.appendMessage.bind(this);
    // this.processBotQueue = this.processBotQueue.bind(this);
    // this.processResponse = this.processResponse.bind(this);
    // this.getResponse = this.getResponse.bind(this);
    // this.handleResize = this.handleResize.bind(this);
    // this.handleSubmitText = this.handleSubmitText.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    if (this.state.isVisible) {
      this.setState({isOpen: !this.state.isOpen});
    } else {
      this.setState({isVisible: true});
    }
  }

  render() {  
    //8bf5ded5496e4b528209b96b2d3b12d8 ; stock available of 2C00020C-ROH in plant US45
    //26c99218affc4a08ae8ba1f520cd3a02 ; stock availibility for 108510-BULK in Warehouse W001
    // const client = new ApiAiClient({accessToken: '8bf5ded5496e4b528209b96b2d3b12d8'});
    // console.info(client);
    // client.textRequest('Hello!')
    //       .then((response) => {console.log(response)/* do something */})
    //       .catch((error) => {console.log(error)/* do something here too */})
    if(!this.state.isOpen){
      var partial = <div>Hi I am chat dialog.. make me better</div>
  }
    return (
      <div className="container" style={this.state.isVisible ? {display: 'block'} : {display: 'none'}}>
        <Header title='Merlin AI'
                onClick={this.handleToggle} />
                
                
        {partial}
        {/* <div style={this.state.isOpen ? {minHeight: `${this.state.dialogHeight}px`} : {maxHeight: 0, overflow: 'hidden'}}>
          <Dialog messages={this.state.messages}
                  isBotTyping={this.state.isBotTyping}
                  isUserHidden={this.props.isUserHidden}
                  dialogHeight={this.state.dialogHeight} />
          <Input onSubmit={this.handleSubmitText} />
        </div> */}
      </div>
    );
  }
}

export default App;
