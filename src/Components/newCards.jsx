import React, { Component } from 'react';
import newNode from "./newNode.jsx";

class newCard extends Component {
  constructor() {
    super();
    this.state = {
      apiresponse: []
    }
  }
  componentDidMount() {
    fetch("/server/overview")
    .then(res => res.json())
    .then(json => {
      this.setState({apiresponse: json});
    })
    .catch(err => {
      console.log(err);
    })
  }
  render() {
    nodes = [];
    for (let i = 0; i < this.state.apiresponse.length; i++) {
      nodes.push(<newNode nodeName = {this.state.apiresponse[i].node} pods = {this.state.apiresponse[i].pods}/>)
    }
    return (
      <div className = "card">
        {nodes}
      </div>
    )
  }
}

export default newCard;