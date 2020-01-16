/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import GithubLogo from './GitHubLogo.jsx';
import TwitterLogo from './TwitterLogo.jsx';

export default class IconsBox extends Component {
  render() {
    return (
      <div className="iconsBox">
        <GithubLogo />
        <TwitterLogo />
      </div>
    );
  }
}
