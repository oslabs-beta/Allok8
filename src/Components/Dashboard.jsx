import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitApiToken } from '../Actions/actionCreator.js';
import * as types from '../Actions/actionTypes';
// We will be doing fetches so we will need thunks
import thunks from '../Middleware/thunkMiddleware.js';


const mapStateToProps = (store) => ({
});

const mapDispatchToProps = (dispatch) => ({
//   submitApiToken: () => dispatch(submitApiToken(document.getElementById('apiInput').value, document.getElementById('tokenInput').value)),
});


class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="DashboardContainer"><h1>DASHBOARD</h1></div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
