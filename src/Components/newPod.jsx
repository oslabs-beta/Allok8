import React, { Component } from 'react';
import newContainer from "./newContainer.jsx";


const newPod = (props) => {
  const containers = [];
  for (let i = 0; i < props.containers.length; i ++) {
    containers.push(<newContainer containerName = {props.containers[i]} />);
  }
  return (
    <div className = "pod">
      <span>{props.podName}</span>
      {containers}
    </div>
  )
}

export default newPod;
