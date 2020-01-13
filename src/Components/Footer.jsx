import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GithubLogo from './GitHubLogo.jsx';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="footerContainer">
        <div id="footLinks">
          <Link to="/About" style={{ textDecoration: 'none' }}>
            <h5 className="clickable">About</h5>
          </Link>
          <Link to="/Contact" style={{ textDecoration: 'none' }}>
            <h5 className="clickable">Contact</h5>
          </Link>
          <Link to="/Terms" style={{ textDecoration: 'none' }}>
            <h5 className="clickable">Terms</h5>
          </Link>
        </div>
      </div>
    );
  }
}

export default Footer;
