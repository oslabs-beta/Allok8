import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goTo } from '../Actions/actionCreator';


const mapDispatchToProps = (dispatch) => ({
  goToAbout: () => dispatch(goTo('ABOUT')),
});
class Footer extends Component {
  constructor(props) {
    super(props);
  }

  //! Needs func to change pages
  render() {
    return (
      <div id="footerContainer">
        <div id="footLinks">
          <h5 className="clickable" onClick={() => this.props.goToAbout()}>About</h5>
          {/* <h5 className="clickable">Contact</h5> */}
          <h5 className="clickable">Blog</h5>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(Footer);
