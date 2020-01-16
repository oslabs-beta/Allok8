
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeView } from '../Actions/actionCreator';

const mapDispatchToProps = (dispatch) => ({
  changeView: (str) => dispatch(changeView(str)),
});

const mapStateToProps = (store) => ({
  view: store.state.view,
});

class Switch extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.view === this.props.setting) document.getElementById(this.props.setting).checked = true;
  }

  render() {
    return (
      <label className="switch">
        <input id={this.props.setting} className="viewSwitch" type="checkbox" />
        <span
          className="slider"
          onClick={() => {
            console.log(this.props.setting);
            this.props.changeView(this.props.setting);
          }}
        />
      </label>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Switch);
