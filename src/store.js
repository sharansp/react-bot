import { createStore } from 'redux'

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */

// var state = {
//    title:'React Bot UI',
//   // messages: [],
//   isBotTyping: false,
//   // isOpen: props.isOpen !== undefined ? props.isOpen : true,
//   // isVisible: props.isVisible !== undefined ? props.isVisible : true
// };


function commonReducer(state= {
  //title:'React Bot UI',
//  isBotTyping: false
  
  messages: [],
  isBotTyping: false,
  // isOpen: props.isOpen !== undefined ? props.isOpen : true,
  // isVisible: props.isVisible !== undefined ? props.isVisible : true
} , action) {
  switch (action.type) {
  case 'BOT_TYPING':
  let val = action.payload.botQueue.length > 0;
    return {...state,isBotTyping:val}
  default:
    return state;
  }
  return state;
}


export default createStore(commonReducer)