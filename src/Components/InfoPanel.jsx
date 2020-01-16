import React, { Component } from 'react';
import { connect } from 'react-redux';
import Addresses from './Addresses.jsx'


const mapStateToProps = (store) => ({
  selected: store.state.selected,
});
class InfoPanel extends Component {
  constructor(props) {
    super(props);

    this.formatData = this.formatData.bind(this);
  }

  formatData() {
    const tempD = this.props.selected;
    console.log('this is tempd', tempD)
    let data = {};
    if (tempD.node) {
      // console.log('node');
      // console.log(tempD.node)
      data.name = tempD.node.nodeUsage.metadata.name;
      data.usage = tempD.node.nodeUsage.usage;
      data.time = tempD.node.nodeUsage.metadata.creationTimestamp;
      // console.log(tempD.node.nodeUsage.usage);
      data.cap = {};
      data.cap = tempD.node.capacity.memory;

      data.address = [];
      tempD.node.addresses.forEach(el=>  {
        console.log('this is el ', el)
        data.address.push(<Addresses line={el}/>)
        
      })
      // console.log('ARRRRRRRRRRAY', data.address)
        
    } else if (tempD.podInfo) {
      // console.log('pod');
      data.name = tempD.podInfo.metadata.name;
      data.time = tempD.podInfo.metadata.creationTimestamp;
      data.usage = tempD.podInfo.spec.containers.reduce((acc, el) => {
        if (el.usage.cpu) acc.cpu = `${parseInt(el.usage.cpu, 10) + parseInt(acc.cpu, 10)}n`;
        if (el.usage.memory) acc.memory = `${parseInt(el.usage.memory, 10) + parseInt(acc.memory, 10)}Ki`;

        return acc;
      }, { cpu: '0', memory: '0' });

      data.capReq = tempD.podInfo.spec.containers.reduce((acc, el) => {
        if (el.resources.requests.cpu) acc.cpu = `${parseInt(el.resources.requests.cpu, 10) + parseInt(acc.cpu, 10)}n`;
        if (el.resources.requests.memory) acc.memory = `${parseInt(el.resources.requests.memory, 10) + parseInt(acc.memory, 10)}Ki`;

        return acc;
      }, { cpu: '0', memory: '0' });



    } else if (tempD.spec) {
      // console.log('container');
      // console.log('this is what i need', tempD.spec.resources.requests.cpu)
      
      data.name = tempD.spec.name;
      data.usage = tempD.spec.usage;
      data.capReq = {}
      data.capReq.cpu = tempD.spec.resources.requests.cpu;
      console.log('THIS IS WHERE IT BREAKS', data.capReq.cpu)
      data.capReq.memory = tempD.spec.resources.requests.memory ;
      if (!data.capReq.memory) data.capReq.memory = data.usage.memory;
    } else { data = null; }

    return data;
  }

  render() {
    // console.log(this.props.selected);
    const data = this.formatData();
    console.log('THIS IS DATA', data)
    if (data) {
      if (data.capReq) {
        return (
          <div id="infoPanel">
            <h3>{data.name}</h3>
            <h4>Request Usage:</h4>
            <p>{`CPU: ${((parseInt(data.usage.cpu, 10)*0.000001)/ parseInt(data.capReq.cpu, 10)).toFixed(2)}%`}</p>
            <p>{`Memory: ${((parseInt(data.usage.memory, 10)*0.001)/ parseInt(data.capReq.memory, 10)).toFixed(2)}%`}</p>
          </div>
        );
      } else {
        console.log('this is node data', data)
      return (
        <div id="infoPanel">
          <h3>{data.name}</h3>
          <h4>Capacity Usage:</h4>
          <p>{`CPU: ${(((parseInt(data.usage.cpu, 10)*0.000001)/1000) * 100).toFixed(2)}%`}</p>
          <p>{`Memory: ${((parseInt(data.usage.memory, 10))/ parseInt(data.cap, 10)).toFixed(2)}%`}</p>
          <h4>Creation Time:</h4>
          <p>{data.time}</p>
          <h4>Addresses:</h4>
          {data.address}
          <p>n</p>
          <p>n</p>
        
        </div>
      );
    }} else {
    return (
      <div id="infoPanel" />
    );
    }
  }
}

export default connect(mapStateToProps)(InfoPanel);
