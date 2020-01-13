/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Landing from './Landing.jsx';
import Dashboard from './Dashboard.jsx';
import Header from './Header.jsx';
import DisplayPane from './DisplayPane.jsx';


const mapStateToProps = (store) => ({
  // page: store.state.page,
  // payload: store.state.payload,
});

class App extends Component {
  // renders a button and a boolean; the button flips the boolean
  render() {
    return (
      <Router>
        <div className="max">
          <Header />
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
          <div id="footer" />
        </div>
      </Router>
    );
  }
}


export default connect(mapStateToProps)(App);
