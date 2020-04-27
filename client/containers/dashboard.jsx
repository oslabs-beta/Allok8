import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Circle from '../components/Circle.jsx';
import Line from '../components/Line.jsx';
//import NewCard from "../components/NewCard.jsx";

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {};
  }

  render() {
    return (
      <div className="graphs">
      <div style={{ width: 900, height: 600 }}>
          <Circle />
        </div>
        <div style={{ width: 900, height: 600 }}>
          <Line />
        </div>
      </div>
     //<NewCard />
    );
  }
}

export default Dashboard;
