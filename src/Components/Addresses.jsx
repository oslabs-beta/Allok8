import React, { Component } from 'react';

export default class Addresses extends Component {
  render() {
    console.log('this line', this.props)
    return (
      <div>
        <p>Type: {this.props.line.type}</p>
        <p>Address: {this.props.line.address}</p>
      </div>
    );
  }
}