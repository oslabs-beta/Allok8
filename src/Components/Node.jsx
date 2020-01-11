import React, { Component } from 'react';
import Pod from './Pod.jsx';



class Node extends Component{
  
  render(){
    console.log('***** NODE PROPS:', this.props);
    let podArray = [];
    for(let key in this.props.node){
    if(Object.keys(this.props.node).includes('pods')){
      console.log('YEEEZZZY')
      if(this.props.node.pods.metadata){
        podArray.push(this.props.node.pods.metadata);
      }
      //console.log(podArray);
    } else {
      console.log('NOPPEEEE')
    }
  
    console.log('***** PODARRAY IS:', podArray);
  }
    //for(let key in this.props.node.pod)
    return(
      <div>
        <h4>{this.props.node.nodeUsage.metadata.name}</h4>
        <Pod podInfo={this.props.node.pods} />
      </div>
    )
  }
}

export default Node;