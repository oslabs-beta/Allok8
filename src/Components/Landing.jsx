/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// We will be doing fetches so we will need thunks
import thunks from '../Middleware/thunkMiddleware';
import Login from './Login.jsx';
import LoginInst from './LoginInst.jsx';
import AboutBox from './AboutBox.jsx';


const mapStateToProps = (store) => ({
  api: store.state.api,
  token: store.state.token,
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(thunks.getData(document.getElementById('apiInput').value, document.getElementById('tokenInput').value)),
});


class Landing extends Component {
  render() {
    return (
      <div id="landingContainer" className="max landingContainer">
        <img id="backImg" src="../Assets/Logo-Blu.svg" alt="" />
        <div className="colContainer">
          {/* <div className="column">
            <AboutBox />
          </div> */}
          <div className="column">
            <Login />
            <LoginInst />
          </div>
        </div>
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Landing);
