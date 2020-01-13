import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="headerContainer">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1>Allok8</h1>
        </Link>
      </div>
    );
  }
}

export default Header;
