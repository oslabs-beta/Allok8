import React from 'react';

const NewContainer = (props) => {
  return (
    <div className = "container" >
      <span>{props.containerName}</span>
    </div>
  )
}

export default NewContainer;