import React, { Component } from 'react';

class Pod extends Component{

  render(){
    
    console.log('****PODS PROPS:', this.props.podInfo)
    
    return(
      <div>
        {/* <h3>{this.props.podInfo.metadata.name}</h3> */}
      </div>
    )
  }
}

export default Pod;