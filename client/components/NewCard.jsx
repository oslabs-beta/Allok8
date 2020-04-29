import React, { Component } from 'react';
import NewNode from "./NewNode.jsx";

class NewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiresponse: []
    }
  }
  //version used for prod
  componentDidMount() {
    // fetch("/server/overview")
    fetch("/local")
    .then(res => {
      return res.json();
    })
    .then(json => {
      this.setState({apiresponse: JSON.parse(json)});
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    const nodes = [];
    for (let i = 0; i < this.state.apiresponse.length; i++) {
      nodes.push(<NewNode key={this.state.apiresponse[i]} nodeName = {this.state.apiresponse[i].node} pods = {this.state.apiresponse[i].pods}/>)
    }
    return (
      <div className = "card" onClick = {this.props.selectObject}>
        {nodes}
      </div>
    )
  }
}

export default NewCard;