import React, { Component } from 'react';
import DisplayPane from './DisplayPane.jsx';


class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const test = [
      <div className="option">
        <p>Cards</p>
      </div>,
    ];
    return (
      <div id="sidebar">
        {/* REPLACE WITH LIST */}
        <DisplayPane title="View" content="test" />
        <DisplayPane title="Namespaces" content="default" />
        <DisplayPane title="Stuff" content="options" />
        <DisplayPane title="Stuff" content="options" />
      </div>
    );
  }
}

export default Sidebar;
