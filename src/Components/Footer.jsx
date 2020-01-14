import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GithubLogo from './GitHubLogo.jsx';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  //! Needs func to change pages
  render() {
    return (
      <div id="footerContainer">
        <div id="footLinks">
          <h5 className="clickable">About</h5>
          <h5 className="clickable">Contact</h5>
          <h5 className="clickable">Terms</h5>
        </div>
      </div>
    );
  }
}

export default Footer;
