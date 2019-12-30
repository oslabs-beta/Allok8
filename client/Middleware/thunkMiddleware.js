import store from '../store';
import * as actionCreator from '../constant/actionCreator.js';



const nextValue = (uri) => 
 () => {

  const data = { uri }
  // todo add route
  fetch('', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    //do some work to grab what we need
    .then(val => {store.dispatch(actionCreator.updateValue(val))});
  }

export default {
  nextValue
};