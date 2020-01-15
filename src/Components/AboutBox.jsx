/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class AboutBox extends Component {
  render() {
    const text1 = 'fwukwefwvwevwvhfuwh r vnwjewbfuegh oehouf heoughf  ewhro he ogher ierh her uu ';
    const text2 = 'fwukwefwvwevwvhfuwh r vnwjewbfuegh oehouf heoughf  ewhro he ogher ierh her uu ';
    return (
      <div className="textBox">
        <h1>About</h1>
        <p>{text1}</p>
        <hr />
        <p>{text2}</p>
      </div>
    );
  }
}
