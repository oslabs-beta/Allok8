import React from 'react';

const NewContainer = (props) => {
  return (
    <div className = "container-div" >
      <span className = "container">{props.containerName}</span>
    </div>
  )
}

export default NewContainer;