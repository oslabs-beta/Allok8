import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GithubLogo from './GitHubLogo.jsx';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  //! Needs func to change to homepage
  render() {
    return (
      <div id="headerContainer">
        {/* <Link to="/" style={{ textDecoration: 'none' }}> */}
        <h1 className="clickable">Allok8</h1>
        {/* </Link> */}
        <GithubLogo />
      </div>
    );
  }
}

export default Header;
