import React, { Component } from 'react';
import Pod from './Pod.jsx';

// * this is the node component that is being displayed via the viewer container

// * 
class Node extends Component {
  render() {
    // console.log('***** !!!!NODE PROPS IN NODE:', this.props.node.pods);
    // * create a variable to store pods array to refer to it later
    const pods = this.props.node.pods;

    // * create a new variable to store pod information to use later 
    const podArray = [];

    // * loop through pods array and grab the name of the pod to display
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
