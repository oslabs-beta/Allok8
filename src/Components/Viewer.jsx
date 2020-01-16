/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Node from './Node.jsx';
import Table from './Table.jsx';
import Tree from './Tree.jsx';


const mapStateToProps = (store) => ({
  data: store.state.data,
  view: store.state.view,
});

class Viewer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    switch (this.props.view) {
      case 'Cards':
      // * create a variable to store node names here for use later
        const nodeArray = [];

        // * create a new variable to store node info object
        const nodePropsObj = this.props.data.nodeInfo.nodeMetricsRaw;

        // console.log('***NODEPROPS IN VIEWER:', nodePropsObj);

        // * create a new var to store and iterate over key/val pairs from nodePropsObj
        const nodeMetricsArr = Object.entries(nodePropsObj);
        // console.log('***NODE METRICS IN VIEWER:', nodeMetricsArr);
        // * loop through array and grab the node name value
        nodeMetricsArr.forEach((el, i) => {
          nodeArray.push(<Node key={`node${i}`} node={el[1]} />);
        // console.log('****this is EL:', el);
        });

        // console.log(nodeArray);

        return (
          <div id="viewer">
            {nodeArray}
          </div>
        );

        // ---------------------------------------------------------------------------------
      case 'Table':

        return (<div id="viewer"><Table /></div>);

        // ---------------------------------------------------------------------------------
      case 'Tree':

        return (<div id="viewer"><Tree /></div>);

        // ---------------------------------------------------------------------------------
      default:
    }
  }
}

export default connect(
  mapStateToProps,
)(Viewer);
