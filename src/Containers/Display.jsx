import React, { Component } from 'react';
import MainView from './MainView.jsx';

class Display extends Component {
  constructor(props){
    super(props)
  }

  render(){

    return(
      <div>
        <h1>THIS IS THE DISPLAY YAY</h1>
        <MainView/> 
      </div>
    )
  }
}

export default Display;