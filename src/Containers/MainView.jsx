import React, { Component } from 'react';
import Viewer from './Viewer.jsx';
import InfoPanel from '../Components/InfoPanel.jsx';

class MainView extends Component{
  constructor(props){
    super(props)
  }

  render(){

    return(
      <div>
        <h2>THIS IS THE MAIN VIEW</h2>
        <Viewer />
        <InfoPanel />
      </div>
    )
  }
}

export default MainView;