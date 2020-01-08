import React, { Component } from 'react';


class Node extends Component{
  constructor(props){
    super(props)
  }

  render(){

    return(
      <div>
        <h4>{this.props.node}</h4>
      </div>
    )
  }
}

export default Node;