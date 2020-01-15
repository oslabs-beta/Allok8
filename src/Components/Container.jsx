import React, { Component } from 'react';

// * this is the container component that is being displayed via the pod  component


class Container extends Component {
  render() {
    console.log('*** IN CONTAINER:', this.props);
    return (
      <div className="cont">
        {/* <h5>IN THE CONTAINER</h5> */}
        <h5>{this.props.spec.name}</h5>
        <p>{this.props.spec.usage.memory}</p>
      </div>
    );
  }
}

export default Container;
