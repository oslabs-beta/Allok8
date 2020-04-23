import React, { Component } from 'react';

const newContainer = (props) => {
  return (
    <div className = "container">
      <span>{props.containerName}</span>
    </div>
  )
}

export default newContainer;