import React, { Component } from 'react';
import Container from './Container.jsx';

// * this is the pod component that is being displayed via the node component

class Pod extends Component {
  render() {
    console.log('****PODS PROPS IN POD:', this.props.podInfo);
    // * create a variable to store pod information to refer to later
    const { podInfo } = this.props;

    // * create a variable to store data for containers
    const containerArr = [];

    // * to loop through podInfo obj to grab pertinent data in regards to container resources
    for (let i = 0; i < podInfo.spec.containers.length; i += 1) {
      const contInfo = podInfo.spec.containers[i];
      contInfo.usage = podInfo.podUsage.containers[i].usage;
      containerArr.push(<Container spec={contInfo} />);
      // console.log('container info in pod', contInfo);
    }


    return (
      <div>
        <h4>IN THE POD</h4>
        <h4>{podInfo.metadata.name}</h4>
        <h4>{containerArr}</h4>
      </div>
    );
  }
}

export default Pod;
