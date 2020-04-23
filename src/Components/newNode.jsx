import React, { Component } from 'react';
import newPod from "./newPod.jsx";


const newNode = (props) => {
  const pods = [];
  for (let i = 0; i < props.pods.length; i ++) {
    pods.push(<newPod podName = {props.pods[i].pod} containers = {props.pods[i].containers}/>)
  }
  return (
    <div className = "node">
      <span>{props.nodeName}</span>
      {pods}
    </div>
  )
}

export default newNode;
