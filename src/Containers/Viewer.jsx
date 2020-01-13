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
    // console.log('**** this is', this.props);
    // let nodeArray = [];
    // for(let key in this.props.data.nodeInfo.nodeMetricsRaw){
    //   //console.log('*****this is the key', key);
    //   nodeArray.push(<Node node={this.props.data.nodeInfo.nodeMetricsRaw[key]}/>);
    // }

    // * refactor above to use cleaner code with objec.keys && forEach

    // * store node names here for use later
    let nodeArray = [];
    console.log('*** NODE ARR b4 PUSH:', nodeArray);

    // * create a new var to store node info object
    const nodePropsObj = this.props.data.nodeInfo.nodeMetricsRaw;

    console.log('*****NODEPROPS:', nodePropsObj);
   
    const nodeMetricsArr = Object.entries(nodePropsObj);
    console.log('***NODE METRICS:', nodeMetricsArr);
    nodeMetricsArr.forEach(function(el){
      nodeArray.push(<Node node={el[1]}/>);
      console.log('****this is EL:', el)
    });

    
    console.log(nodeArray);


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
