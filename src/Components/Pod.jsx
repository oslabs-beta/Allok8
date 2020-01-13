import React, { Component } from 'react';
import Container from './Container.jsx';

class Pod extends Component{

  render(){
    
    console.log('****PODS PROPS:', this.props.podInfo)
    const metadata = this.props.podInfo;
    return(
      <div>
        <h4>{metadata.name}</h4>
        <h4><Container /></h4>
      </div>
    )
  }
}

export default Pod;