import React, { Component } from 'react';
class Container extends Component {

  render(){
    console.log('*** IN CONTAINER:',this.props);
    return(
      <div>
        <h5>IN THE CONTAINER</h5>
        <h5>{this.props.spec.name}</h5>
        <h6>{this.props.spec.usage.memory}</h6>
      </div>
    )
  }
}

export default Container;