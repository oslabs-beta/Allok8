import React, { Component } from 'react';

export default class Volume extends Component {
  render() {
    console.log('this line', this.props)
    return (
      <div>
        <p>Name: {this.props.vol.name}</p>
      </div>
    );
  }
}