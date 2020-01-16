/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Landing from './Landing.jsx';
import Dashboard from './Dashboard.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import AboutBox from './AboutBox.jsx';


const mapStateToProps = (store) => ({
  page: store.state.page,
  // payload: store.state.payload,
});

class App extends Component {
  // renders a button and a boolean; the button flips the boolean
  render() {
    switch (this.props.page) {
      case 'LANDING':
        return (
          <div className="max">
            <Header />
            <Landing />
            <Footer />
          </div>
        );
      case 'DASHBOARD':
        return (
          <div className="max">
            <Header />
            <Dashboard />
          </div>
        );
      case 'ABOUT':
        return (
          <div className="max">
            <Header />
            <AboutBox />
            <Footer />
          </div>
        );
      default:
        return (<h1>ERROR</h1>);
    }
  }
}


export default connect(mapStateToProps)(App);
