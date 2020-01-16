import React, { Component } from 'react';
import MenuItem from './MenuItem.jsx';


class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="sidebar">
        <MenuItem inner="Cards" />
        <MenuItem inner="Tree" />
        <MenuItem inner="Table" />
        <MenuItem inner="Sunburst" />
      </div>
    );
  }
}

export default Sidebar;
