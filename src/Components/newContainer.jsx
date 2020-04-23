import React, { Component } from 'react';

const newContainer = (props) => {
  return (
    <div className = "pod">
      <span>{props.containerName}</span>
    </div>
  )
}

export default newContainer;