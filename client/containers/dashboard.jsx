import React, { Component } from 'react';
import NewCard from "../components/NewCard.jsx";

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedObj: "",
    };
    this.selectObject = this.selectObject.bind(this);
  }
  selectObject(event) {
    const newState = Object.assign(this.state, {selectedObj: event.target.innerText});
    this.setState(newState);
  }
  render() {
    console.log(this.state.selectedObj)
    return (
     <NewCard selectObject = {this.selectObject}/>
    );
  }
}

export default Dashboard;
