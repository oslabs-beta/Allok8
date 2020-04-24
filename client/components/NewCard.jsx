import React, { Component } from 'react';
import NewNode from "./NewNode.jsx";

class NewCard extends Component {
  constructor() {
    super();
    this.state = {
      apiresponse: []
    }
  }
  componentDidMount() {
    fetch("/server/overview")
    .then(res => {
      return res.json();
    })
    .then(json => {
      console.log(json);
      this.setState({apiresponse: json});
    })
    .catch(err => {
      console.log(err);
    })
  }
  render() {
    const nodes = [];
    for (let i = 0; i < this.state.apiresponse.length; i++) {
      nodes.push(<NewNode nodeName = {this.state.apiresponse[i].node} pods = {this.state.apiresponse[i].pods}/>)
    }
    return (
      <div className = "card">
        {nodes}
      </div>
    )
  }
}

export default NewCard;