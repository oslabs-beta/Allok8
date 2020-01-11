import React, { Component } from 'react';




class Node extends Component{
  constructor(props){
    super(props)
  }

  render(){
    console.log('***** NODE PROPS:', this.props.node.nodeUsage);
    return(
      <div>
        <h4>{this.props.node.nodeUsage.metadata.name}</h4>
      </div>
    )
  }
}

export default Node;