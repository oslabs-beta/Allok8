
import React, { Component } from 'react';

class Switch extends Component {
  render() {
    return (
      <label className="switch">
        <input type="checkbox" />
        <span className="slider" />
      </label>
    );
  }
}

export default Switch;
