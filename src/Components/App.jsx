import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../Actions/actionCreator.js';
// We will be doing fetches so we will need thunks
import thunks from '../Middleware/thunkMiddleware.js';
import Landing from './Landing.jsx';


const mapDispatchToProps = (dispatch) => ({
  // flipBool: () => dispatch(actions.flipBool()),
});

const mapStateToProps = (store) => ({
  // bool: store.state.bool,
  // payload: store.state.payload,
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  // renders a button and a boolean; the button flips the boolean
  render() {
    return (
      <Landing />
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
