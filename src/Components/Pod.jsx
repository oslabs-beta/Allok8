import React, { Component } from 'react';
import Container from './Container.jsx';

class Pod extends Component{

  render(){
    
    console.log('****PODS PROPS:', this.props.podInfo)
    const metadata = this.props.podInfo.metadata;
    let containerArr = [];
    this.props.podInfo.spec.containers.forEach(function(el){
      containerArr.push(<Container spec={el}/>);
    })
    return(
      <div>
        <h4>{metadata.name}</h4>
        <h4>{containerArr}</h4>
      </div>
    )
  }
}

export default Pod;