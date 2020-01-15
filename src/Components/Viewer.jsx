import React, { Component } from 'react';
import { connect } from 'react-redux';
import Node from './Node.jsx';


const mapStateToProps = (store) => ({
  data: store.state.data,
});

class Viewer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // * create a variable to store node names here for use later
    const nodeArray = [];

    // * create a new variable to store node info object
    const nodePropsObj = this.props.data.nodeInfo.nodeMetricsRaw;

    // console.log('***NODEPROPS IN VIEWER:', nodePropsObj);

    // * create a new var to store and iterate over key/val pairs from nodePropsObj
    const nodeMetricsArr = Object.entries(nodePropsObj);
    // console.log('***NODE METRICS IN VIEWER:', nodeMetricsArr);
    // * loop through array and grab the node name value
    nodeMetricsArr.forEach((el) => {
      nodeArray.push(<Node node={el[1]} />);
      // console.log('****this is EL:', el);
    });

    console.log(nodeArray);

    return (
      <div id="viewer">
        {nodeArray}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(Viewer);
