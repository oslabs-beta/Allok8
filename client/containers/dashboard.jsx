import React, { Component } from 'react';
import NewCard from "../components/NewCard.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Circle from '../components/Circle.jsx';
import Line from '../components/Line.jsx';
//import NewCard from "../components/NewCard.jsx";

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedObj: "",
      restObjType: "",
      chartData: []
    };
    this.selectObject = this.selectObject.bind(this);
    this.obtainChartData = this.obtainChartData.bind(this);
  }
  selectObject(event, method = "memory_percent") {
    const restObjName = event.target.innerText;
    const restObjType = event.target.className;
    if (restObjType === "node") {
      fetch("/server/node", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nodeName: restObjName,
          mode: method
        })
      })
      .then(res => res.json())
      .then(json => {
        const newState = Object.assign(this.state, {
          selectObject: restObjName, 
          restObjType: "node",
          chartData: json
        })
        this.setState(newState);
      })
    } else if (restObjType === "container") {
      fetch("/server/container", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          containerName: restObjName,
          mode: method
        })
      })
      .then(res => res.json())
      .then(json => {
        const newState = Object.assign(this.state, {
          selectObject: restObjName, 
          restObjType: "container",
          chartData: json
        })
        this.setState(newState);
      })
    } else {
      fetch("/server/pod", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          podName: restObjName,
          mode: method
        })
      })
      .then(res => res.json())
      .then(json => {
        const newState = Object.assign(this.state, {
          selectObject: restObjName, 
          restObjType: "pod",
          chartData: json
        })
        this.setState(newState);
      })
    }
  }
  render() {
    console.log(this.state.selectedObj)
    return (
      <div className = "dashboard">
        <NewCard selectObject = {this.selectObject}/>
        <div className = "graphs">
          <div className = "circle-component" style={{ width: 900, height: 600 }}>
            <Circle />
          </div>
          <div className = "line-component" style={{ width: 900, height: 600 }}>
            <Line data = {this.state.chartData}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
