import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NewCard from "../components/NewCard.jsx";

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {};
  }

  render() {
    return (
     <NewCard />
    );
  }
}

export default Dashboard;
