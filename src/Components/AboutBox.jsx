/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';


export default class AboutBox extends Component {
  render() {
    const text1 = 'Placeholder';
    const text2 = 'Hi Mom!';
    return (
      <div className="max landingContainer">
        <img id="backImg" src="../Assets/Logo-Blu.svg" alt="" />
        <div id="about" className="textBox">
          <h1>About</h1>
          <p>{text1}</p>
          <hr />
          <p>{text2}</p>
        </div>
      </div>
    );
  }
}
