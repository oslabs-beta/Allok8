import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../Actions/actionCreator.js';
// We will be doing fetches so we will need thunks
import thunks from '../Middleware/thunkMiddleware.js';


const mapDispatchToProps = (dispatch) => ({
  flipBool: () => dispatch(actions.flipBool()),
});

const mapStateToProps = (store) => ({
  bool: store.state.bool,
  payload: store.state.payload,
});


class Landing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="landingContainer">
        <h1>Allok8</h1>
        <hr />
        <input id="apiInput" placeholder="Api" type="text" />
        <br />
        <input id="tokenInput" placeholder="Token" type="text" />
        <br />
        <button>=></button>
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Landing);
