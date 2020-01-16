
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeView } from '../Actions/actionCreator';

const mapDispatchToProps = (dispatch) => ({
  changeView: (str) => dispatch(changeView(str)),
});

class Switch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <label className="switch">
        <input id={this.props.setting} className="viewSwitch" type="checkbox" />
        <span
          className="slider"
          onClick={() => this.props.changeView(this.props.setting)}
        />
      </label>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(Switch);
