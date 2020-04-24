import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import newCards from "../components/newCards.jsx";

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {};
  }

  render() {
    return (
     <newCards />
    );
  }
}

export default Dashboard;
