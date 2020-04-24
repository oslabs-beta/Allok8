import React from 'react';
import NewPod from "./NewPod.jsx";


const NewNode = (props) => {
  const pods = [];
  for (let i = 0; i < props.pods.length; i ++) {
    pods.push(<NewPod podName = {props.pods[i].pod} containers = {props.pods[i].containers}/>)
  }
  return (
    <div className = "node">
      <span>{props.nodeName}</span>
      {pods}
    </div>
  )
}

export default NewNode;
