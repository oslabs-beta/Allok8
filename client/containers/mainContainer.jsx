import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../components/Login';
import Dashboard from './dashboard';
import PrivateRoute from '../components/PrivateRoute';

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
