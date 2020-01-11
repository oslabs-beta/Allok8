import React, { Component } from 'react';
import { connect } from 'react-redux';
import Node from '../Components/Node.jsx';


const mapStateToProps = (store) => ({
  data: store.state.data,
});

class Viewer extends Component{
  constructor(props){
    super(props)
  }

  render(){
    console.log('**** this is', this.props);
    let nodeArray = [];
    for(let key in this.props.data.nodeInfo.nodeMetricsRaw){
      console.log('*****this is the key', key);
      nodeArray.push(<Node node={key}/>);
    }
    return(
      <div>
        <h4>THIS IS THE VIEWER</h4>
        {nodeArray}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
)(Viewer);
