import React, { Component } from 'react';
import { connect } from 'react-redux';
// We will be doing fetches so we will need thunks
import thunks from '../Middleware/thunkMiddleware.js';

// import header
import Header from './Header.jsx';
import Display from '../Containers/Display.jsx';

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
    //setInterval(this.updateData, 50000);
  }

  updateData() {
    console.log('Update Data');
    this.props.getData(this.props.api, this.props.token);
  }

  render() {
    console.log(this.props.data);
    return (
      <div>
        <div>
          <Display/>
        </div>
      <div id="DashboardContainer">
        {/* <h1>DASHBOARD</h1> */}
        {/* <div>{this.buildDataDisp()}</div> */}

      </div>
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
