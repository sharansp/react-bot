import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {ApiAiClient} from "api-ai-javascript";
import Header from './components/Header';
import Dialog from './components/Dialog';
import Input from './components/Input';
import HanaFetch from './model/HanaFetch';
import './css/main.css';
import { connect } from 'react-redux'


const BOT_DELAY = 4000;
const BOT_SPEED = 0.03;
const BOT_MAX_CHARS = 150;

function getBotDelay(msg, isQuick = false) {
  let delay = isQuick ? BOT_DELAY / 2 : BOT_DELAY;
  let speed = isQuick ? BOT_SPEED * 2 : BOT_SPEED;
  return msg.length > BOT_MAX_CHARS ? delay : Math.floor(msg.length / speed);
}

class App extends Component {

  constructor(props) {
    super(props);
    this.HanaFetch = HanaFetch;
    if (props.dialogflow) {
      this.dialogflow = new ApiAiClient(props.dialogflow);
    }
    this.botQueue = [];
    this.isProcessingQueue = false;
    // this.state = {
    //   title: props.title || 'React Bot UI',
    //   messages: [],
    //   isBotTyping: false,
    //   isOpen: props.isOpen !== undefined ? props.isOpen : true,
    //   isVisible: props.isVisible !== undefined ? props.isVisible : true
    // };

    this.appendMessage = this.appendMessage.bind(this);
    this.processBotQueue = this.processBotQueue.bind(this);
    this.processResponse = this.processResponse.bind(this);
    this.getResponse = this.getResponse.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleSubmitText = this.handleSubmitText.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  appendMessage(text, isUser = false, next = () => {}) {
    let messages = this.state.messages.slice();
    messages.push({isUser, text});
    this.setState({messages, isBotTyping: this.botQueue.length > 0}, next);
  }

  processBotQueue(isQuick = false) {
    if (!this.isProcessingQueue && this.botQueue.length) {
      this.isProcessingQueue = true;
      const nextMsg = this.botQueue.shift();
      setTimeout(() => {
        this.isProcessingQueue = false;
        this.appendMessage(nextMsg, false, this.processBotQueue);
      }, getBotDelay(nextMsg, isQuick));
    }
  }

  processResponse(text) {
     text="wait buddy....";
    const messages = text
      .match(/[^.!?]+[.!?]*/g)
      .map(str => str.trim());
    this.botQueue = this.botQueue.concat(messages);

    // start processing bot queue
    const isQuick = !this.state.isBotTyping;
    this.setState({isBotTyping: true}, () => this.processBotQueue(isQuick));
  }

  getResponse(text) {
    var self =this;
    return this.dialogflow.textRequest(text)
      .then(data => {
        debugger;
        console.info(self);
      if( data.result.metadata.intentName=="StockAvailability" ){
        let oHanaFetch = new self.HanaFetch();
        let hanaData = oHanaFetch.getHanaresponse(data);
        return hanaData;
        }else{
          return data.result.fulfillment.speech
        }
        
      });
  }

  /* getHanaresponse(){
    debugger;
    let hanaPromise = new Promise((resolve, reject) => {
      debugger
      fetch("https://facebook.github.io/react-native/docs/network.html")
      .then(res => {
        debugger
        resolve(res);
        //res.json()
      })
      .then(
        (result) => {
          debugger
          resolve(result);
        },
        (error) => {
          debugger;
          reject(error);
        }
      )
    });
    
    hanaPromise.then((successMessage) => {
      debugger
      console.log("Yay! " + successMessage);
    }, (e)=>{console.log(e)});

    debugger;
    
    return hanaPromise;
  } */

  handleSubmitText(text) {

    // append user text
    this.appendMessage(text, true);

    // fetch bot text, process as queue
    if (this.dialogflow) {
      this.getResponse(text)
        .then(this.processResponse);
    } else if (this.props.getResponse) {
      this.props.getResponse(text)
        .then(this.processResponse);
    } else {
      this.processResponse('Sorry, I\'m not configured to respond. :\'(')
    }
  }

  handleResize(e) {
    const window = e.target || e;
    const y = window.innerHeight;
    const header = document.querySelector('.container header');
    const input = document.querySelector('.container .text-form');
    let dialogHeight = y - header.offsetHeight - input.offsetHeight;
    if (dialogHeight < 0 || !dialogHeight) {
      dialogHeight = 0;
    } else if (this.props.dialogHeightMax && dialogHeight > this.props.dialogHeightMax) {
      dialogHeight = this.props.dialogHeightMax;
    }
    this.setState({dialogHeight});
  }
  
  handleToggle() {
    if (this.state.isVisible) {
      this.setState({isOpen: !this.state.isOpen});
    } else {
      this.setState({isVisible: true});
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize(window);
  }

  componentWillUnmount() {
    window.removeEventListener('resize');
  }

  render() {  
    //8bf5ded5496e4b528209b96b2d3b12d8 ; stock available of 2C00020C-ROH in plant US45
    //26c99218affc4a08ae8ba1f520cd3a02 ; stock availibility for 108510-BULK in Warehouse W001
    // const client = new ApiAiClwient({accessToken: '8bf5ded5496e4b528209b96b2d3b12d8'});
    // console.info(client);
    // client.textRequest('Hello!')
    //       .then((response) => {console.log(response)/* do something */})
    //       .catch((error) => {console.log(error)/* do something here too */})
    /* if(!this.state.isOpen){
      var partial = <div>Hi I am chat dialog.. make me better</div>
  } */
    return (
      <div className="container" style={this.state.isVisible ? {display: 'block'} : {display: 'none'}}>
        <Header title={this.props.title}
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
function mapStateToProps (state,props){
  return {
    title: props.title || 'React Bot UI',
    isBotTyping: state.isBotTyping,
    isOpen: props.isOpen !== undefined ? props.isOpen : true,
  isVisible: props.isVisible !== undefined ? props.isVisible : true
  } 
}
export default connect(mapStateToProps)(App);
