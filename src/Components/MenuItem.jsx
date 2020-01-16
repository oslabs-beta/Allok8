import React, { Component } from 'react';
import { connect } from 'react-redux';
import Switch from './Switch.jsx';

class MenuItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="menuItem">
        {this.props.inner}
        <Switch setting={this.props.inner} />
      </div>
    );
  }
}

export default MenuItem;
