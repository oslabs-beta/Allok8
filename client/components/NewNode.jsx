import React from 'react';
import NewPod from "./NewPod.jsx";


const NewNode = (props) => {
  const pods = [];
  for (let i = 0; i < props.pods.length; i ++) {
    pods.push(<NewPod key={props.pods[i].pod} podName = {props.pods[i].pod} containers = {props.pods[i].containers}/>)
  }
  return (
    <div className = "node-div" >
      <span className = "node">{props.nodeName}</span>
      {pods}
    </div>
  )
}

export default NewNode;
