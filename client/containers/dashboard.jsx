import React, { Component } from "react";
import NewCard from "../components/NewCard.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Circle from "../components/Circle.jsx";
import Line from "../components/Line.jsx";
import Dropdown from "../components/Dropdown.jsx";
//import NewCard from "../components/NewCard.jsx";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedObj: "",
      restObjType: "",
      chartData: [],
      method: "memory_percent",
    };
    this.selectObject = this.selectObject.bind(this);
    this.setMethod = this.setMethod.bind(this);
  }
  selectObject(event) {
    const restObjName = event.target.innerText;
    const restObjType = event.target.className;
    if (restObjType === "node") {
      fetch("/server/node", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nodeName: restObjName,
          mode: this.state.method,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          const newState = Object.assign(this.state, {
            selectObject: restObjName,
            restObjType: "node",
            chartData: json,
          });
          this.setState(newState);
        });
    } else if (restObjType === "container") {
      fetch("/server/container", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          containerName: restObjName,
          mode: this.state.method,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          const newState = Object.assign(this.state, {
            selectObject: restObjName,
            restObjType: "container",
            chartData: json,
          });
          this.setState(newState);
        });
    } else {
      fetch("/server/pod", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          podName: restObjName,
          mode: this.state.method,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          const newState = Object.assign(this.state, {
            selectObject: restObjName,
            restObjType: "pod",
            chartData: json,
          });
          this.setState(newState);
        });
    }
  }
  setMethod(newMethod) {
    this.setState({
      method: newMethod,
    });
  }
  render() {
    let charts;
    if (this.state.chartData.length > 0) {
      charts = (
        <div id="line" style={{ width: 900, height: 600 }}>
            <Line data={this.state.chartData} />
            <Dropdown setMethod={this.setMethod} method={this.state.method} />
          </div>
      )
    }
    return (
      <div id="dashboard">
        {/* <NewCard selectObject={this.selectObject} /> */}
        <div id="graphs">
          <div id="circle" style={{ width: 900, height: 600 }}>
            <Circle />
          </div>
          {charts}
        </div>
      </div>
    );
  }
}

export default Dashboard;
