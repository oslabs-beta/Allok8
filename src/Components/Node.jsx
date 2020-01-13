import React, { Component } from 'react';
import Pod from './Pod.jsx';

// * this is the node component that is being displayed via the viewer container

// * 
class Node extends Component {
  render() {
    console.log('***** !!!!NODE PROPS:', this.props.node.pods);
    const pods = this.props.node.pods;
    const podArray = [];
    for (let i = 0; i < pods.length; i += 1) {
      if (pods[i].metadata) {
        podArray.push(pods[i]);
      // console.log(podArray);
      } else {
        console.log('Error: no metadata in pod.');
      }

      console.log('***** PODARRAY IS:', podArray);
    }
    
    return (
      <div>
        <h3>{this.props.node.nodeUsage.metadata.name}</h3>
        {podArray.map(el => <Pod podInfo={el} />)}
      </div>
    );
  }
}

export default Node;
