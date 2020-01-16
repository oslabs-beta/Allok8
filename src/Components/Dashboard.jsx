import React, { Component } from 'react';
import { connect } from 'react-redux';
// We will be doing fetches so we will need thunks
import thunks from '../Middleware/thunkMiddleware.js';
import Sidebar from './Sidebar.jsx';
import MainView from './MainView.jsx';

const mapStateToProps = (store) => ({
  data: store.state.data,
  api: store.state.api,
  token: store.state.token,
});

const mapDispatchToProps = (dispatch) => ({
  getData: (api, token) => dispatch(thunks.getData(api, token)),
});


class Dashboard extends Component {
  constructor(props) {
    super(props);

    // this.buildDataDisp = this.buildDataDisp.bind(this);
    this.updateData = this.updateData.bind(this);
    // setInterval(this.updateData, 50000);
  }

  updateData() {
    console.log('Update Data');
    this.props.getData(this.props.api, this.props.token);
  }

  render() {
    console.log(this.props.data);
    return (
      <div id="dashboardContainer" className="max">
        <img id="backImg" src="../Assets/Logo-Blu.svg" alt="" />
        <Sidebar />
        <MainView />
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
