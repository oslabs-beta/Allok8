import React, { Component } from 'react';
import DisplayPane from './DisplayPane.jsx';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="sidebar">
        <DisplayPane title="Namespaces" content="default" />
        <DisplayPane title="Stuff" content="options" />
        <DisplayPane title="Stuff" content="options" />
      </div>
    );
  }
}

export default Sidebar;
