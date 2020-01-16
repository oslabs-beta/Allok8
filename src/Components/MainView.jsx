import React, { Component } from 'react';
import Viewer from './Viewer.jsx';
import InfoPanel from './InfoPanel.jsx';

class MainView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="mainView">
        {/* <ViewNav /> */}
        <Viewer />
        <InfoPanel />
        <div className="padder" />
      </div>
    );
  }
}

export default MainView;
