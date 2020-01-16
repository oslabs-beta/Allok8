import React, { Component } from 'react';
import { connect } from 'react-redux';
import { select } from '../Actions/actionCreator';

// * this is the container component that is being displayed via the pod  component
const mapStateToProps = (store) => ({
  selected: store.state.selected,
});

const mapDispatchToProps = (dispatch) => ({
  select: (obj) => dispatch(select(obj)),
});

class Container extends Component {
  render() {
    console.log('*** IN CONTAINER:', this.props);
    return (
      <div
        className="cont card"
        onClick={(e) => this.props.select({ props: this.props, el: e.target })}
      >
        <h5>{this.props.spec.name}</h5>
        {/* <p>{this.props.spec.usage.memory}</p> */}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
