/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class LoginInst extends Component {
  render() {
    const text1 = 'fwukwefwvwevwvhfuwh r vnwjewbfuegh oehouf heoughf  ewhro he ogher ierh her uu ';
    const text2 = 'fwukwefwvwevwvhfuwh r vnwjewbfuegh oehouf heoughf  ewhro he ogher ierh her uu ';
    return (
      <div className="textBox">
        <h2>How To Get API</h2>
        <p>{text1}</p>
        <h2>How To Get Token</h2>
        <p>{text2}</p>
      </div>
    );
  }
}
