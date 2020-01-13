import React, { Component } from 'react';

class Container extends Component {

  render(){
    console.log('*** IN CONTAINER:',this.props);
    return(
      <div>
        <h5>{this.props.spec.name}</h5>
      </div>
    )
  }
}

export default Container;