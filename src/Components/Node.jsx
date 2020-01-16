import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pod from './Pod.jsx';
import { select } from '../Actions/actionCreator';

// * this is the node component that is being displayed via the viewer container

const mapStateToProps = (store) => ({
  selected: store.state.selected,
});

const mapDispatchToProps = (dispatch) => ({
  select: (obj) => dispatch(select(obj)),
});

class Node extends Component {
  render() {
    // console.log('***** !!!!NODE PROPS IN NODE:', this.props.node.pods);
    // * create a variable to store pods array to refer to it later
    const { pods } = this.props.node;

    // * create a new variable to store pod information to use later
    const podArray = [];

    // * loop through pods array and grab the name of the pod to display
    for (let i = 0; i < pods.length; i += 1) {
      if (pods[i].metadata) {
        podArray.push(pods[i]);
      // console.log(podArray);
      } else {
        console.log('Error: no metadata in pod.');
      }

      // console.log('***** PODARRAY IS:', podArray);
    }

    return (
      <div
        className="node card"
        onClick={(e) => {
          e.stopPropagation();
          return this.props.select({ props: this.props, el: e.target });
        }}
      >
        <h3>{this.props.node.nodeUsage.metadata.name}</h3>
        {podArray.map((el, i) => <Pod key={`i${el.metadata.name}`} podInfo={el} />)}
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Node);
