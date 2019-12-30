import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../Actions/actionCreator.js';
//We will be doing fetches so we will need thunks
import thunks from '../Middleware/thunkMiddleware.js';


const mapDispatchToProps = dispatch => ({
  flipBool: () => dispatch(actions.flipBool()),
});

const mapStateToProps = (store) => ({
  bool: store.state.bool,
  payload: store.state.payload
})

class App extends Component {
  constructor(props) {
    super(props);
  }
  //renders a button and a boolean; the button flips the boolean
  render() {
    return (
      <div>
        {this.props.bool}
        <button onClick={this.props.flipBool}>flip</button>
        <div>{this.props.payload}</div>
      </div>
    )
  }
}





export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);