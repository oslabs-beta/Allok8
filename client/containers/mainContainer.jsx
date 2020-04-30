import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../components/Login.jsx';
import Dashboard from './dashboard.jsx';
import PrivateRoute from '../components/PrivateRoute.jsx';

class MainContainer extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/login' component={ Login } />

          <PrivateRoute exact path='/' component={ Dashboard } />
        </Switch>
      </Router>
    );
  }
}

export default MainContainer;
