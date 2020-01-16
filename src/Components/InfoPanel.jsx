import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    let data = {};
    if (tempD.node) {
      // console.log('node');
      data.name = tempD.node.nodeUsage.metadata.name;
      data.usage = tempD.node.nodeUsage.usage;
      // console.log(tempD.node.nodeUsage.usage);
    } else if (tempD.podInfo) {
      // console.log('pod');
      data.name = tempD.podInfo.metadata.name;
      data.usage = tempD.podInfo.spec.containers.reduce((acc, el) => {
        if (el.usage.cpu) acc.cpu = `${parseInt(el.usage.cpu, 10) + parseInt(acc.cpu, 10)}n`;
        if (el.usage.memory) acc.memory = `${parseInt(el.usage.memory, 10) + parseInt(acc.memory, 10)}Ki`;

        return acc;
      }, { cpu: '0', memory: '0' });
    } else if (tempD.spec) {
      // console.log('container');
      data.name = tempD.spec.name;
      data.usage = tempD.spec.usage;
    } else { data = null; }

    return data;
  }

  render() {
    // console.log(this.props.selected);
    const data = this.formatData();
    if (data) {
      return (
        <div id="infoPanel">
          <h3>{data.name}</h3>
          <h4>Usage:</h4>
          <p>{`CPU: ${data.usage.cpu}`}</p>
          <p>{`Memory: ${data.usage.memory}`}</p>
        </div>
      );
    }
    return (
      <div id="infoPanel" />
    );
  }
}

export default connect(mapStateToProps)(InfoPanel);
