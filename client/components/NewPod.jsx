import React from 'react';
import NewContainer from "./NewContainer.jsx";


const NewPod = (props) => {
  const containers = [];
  for (let i = 0; i < props.containers.length; i ++) {
    containers.push(<NewContainer key={props.containers[i]} containerName = {props.containers[i]} />);
  }
  return (
    <div className = "pod-div">
      <span className = "pod">{props.podName}</span>
      {containers}
    </div>
  )
}

export default NewPod;
