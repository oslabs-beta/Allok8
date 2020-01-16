import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goTo } from '../Actions/actionCreator';
import IconsBox from './IconsBox.jsx';


const mapDispatchToProps = (dispatch) => ({
  goHome: () => dispatch(goTo('LANDING')),
});

class Header extends Component {
  constructor(props) {
    super(props);
  }

  //! Needs func to change to homepage
  render() {
    return (
      <div id="headerContainer">
        <button onClick={() => this.props.goHome()}>
          <h1 className="clickable">Allok8</h1>
        </button>
        <IconsBox />
      </div>
    );
  }
}


export default connect(
  null,
  mapDispatchToProps,
)(Header);
