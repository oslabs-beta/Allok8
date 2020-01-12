import React, { Component } from 'react';

class Pod extends Component{

  render(){
    
    console.log('****PODS PROPS:', this.props.podInfo)
    const metadata = this.props.podInfo;
    return(
      <div>
        <h4>{metadata.name}</h4>
      </div>
    )
  }
}

export default Pod;