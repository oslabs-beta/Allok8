import React, { Component } from 'react';
import GithubLogo from './GitHubLogo.jsx';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  //! Needs func to change to homepage
  render() {
    return (
      <div id="headerContainer">
        <button>
          <h1 className="clickable">Allok8</h1>
        </button>
        <GithubLogo />
      </div>
    );
  }
}

export default Header;
