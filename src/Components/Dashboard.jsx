import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitApiToken } from '../Actions/actionCreator.js';
import * as types from '../Actions/actionTypes';
// We will be doing fetches so we will need thunks
import thunks from '../Middleware/thunkMiddleware.js';

// import header
import Header from './Header.jsx';
import Display from '../Containers/Display.jsx';

const mapStateToProps = (store) => ({
  data: store.state.data,
  api: store.state.api,
  token: store.state.token,
});

const mapDispatchToProps = (dispatch) => ({
  getData: (api, token) => dispatch(thunks.getData(api, token)),
});


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.buildDataDisp = this.buildDataDisp.bind(this);
    this.updateData = this.updateData.bind(this);

    setInterval(this.updateData, 50000);
  }

  updateData() {
    console.log('Update Data');
    this.props.getData(this.props.api, this.props.token);
  }

  buildDataDisp() {
    const { data } = this.props;
    const dataArr = [];
    dataArr.push(<h1 key="cluster">Allok8</h1>);
    for (let n = 0; n < data.nodeInfo.nodeNameArray.length; n += 1) {
      const nodeName = data.nodeInfo.nodeNameArray[n];
      dataArr.push(<h2 key={n}>{`Node ${n + 1}: ${nodeName}`}</h2>);
      if (data.nodeInfo.nodeMetricsRaw[nodeName]) {
        // Metrics for current node
        const nodeMetrics = data.nodeInfo.nodeMetricsRaw[nodeName];

        // Capacity and Allocatable Data for current node
        const alloc = nodeMetrics.allocatable;
        const cap = nodeMetrics.capacity;
        if (cap.memory) dataArr.push(<h6 key={`${n}${nodeName}capMem`}>{`Memory - Allocatable: ${((parseInt(alloc.memory, 10) / parseInt(cap.memory, 10)) * 100).toFixed(2)}%`}</h6>);
        if (alloc.memory) dataArr.push(<h6 key={`${n}${nodeName}alloMem`}>{`Memory - Usage: ${(((parseInt(cap.memory, 10) - parseInt(alloc.memory, 10)) / parseInt(cap.memory, 10)) * 100).toFixed(2)}%`}</h6>);
        if (cap.cpu) dataArr.push(<h6 key={`${n}${nodeName}capCpu`}>{`CPUs: ${cap.cpu}`}</h6>);
        if (alloc.memory) dataArr.push(<h6 key={`${n}${nodeName}alloCPU`}>{`CPU - Allocatable : ${(parseInt(alloc.cpu, 10) / 10)}%`}</h6>);
        // dataArr.push(<h6 key={`${n}${nodeName}capEphStor`}>{`Ephemeral Storage - Capacity: ${cap['ephemeral-storage']}`}</h6>);
        // dataArr.push(<h6 key={`${n}${nodeName}calloEphStor`}>{`Ephemeral Storage - Allocatable: ${alloc['ephemeral-storage']}`}</h6>);

        for (let p = 0; p < data.podInfo.podNameArray.length; p += 1) {
          const podName = data.podInfo.podNameArray[p];
          const podInfo = data.podInfo.podInfo[podName];
          if (podInfo.spec.nodeName === nodeName) {
            if (podName) dataArr.push(<h3 key={`${p}${nodeName}${podName}`}>{`Pod: ${podName}`}</h3>);
            if (podInfo.metadata.namespace) dataArr.push(<h6 key={`${p}${nodeName}${podName}namespace`}>{`Namespace: ${podInfo.metadata.namespace}`}</h6>);
            if (podInfo.status && podInfo.status.phase) dataArr.push(<h6 key={`${p}${nodeName}${podName}status`}>{`Status: ${podInfo.status.phase}`}</h6>);
            if (podInfo.status && podInfo.status.startTime) dataArr.push(<h6 key={`${p}${nodeName}${podName}startTime`}>{`Start Time: ${podInfo.status.startTime}`}</h6>);
            for (let c = 0; c < podInfo.spec.containers.length; c += 1) {
              const cont = podInfo.spec.containers[c];
              if (cont.name) dataArr.push(<h4 key={`${c}${nodeName}${podName}${cont.name}`}>{`Container: ${cont.name}`}</h4>);
              if (cont.image) dataArr.push(<h6 key={`${c}${nodeName}${podName}${cont.name}image`}>{`Image : ${cont.image}`}</h6>);
              if (cont.resources.limits && cont.resources.limits.memory) dataArr.push(<h6 key={`${c}${nodeName}${podName}${cont.name}memLim`}>{`Memory Limit: ${cont.resources.limits.memory}`}</h6>);
              if (cont.resources.requests && cont.resources.requests.memory) dataArr.push(<h6 key={`${c}${nodeName}${podName}${cont.name}memReq`}>{`Memory Requests: ${cont.resources.requests.memory}`}</h6>);
              if (cont.resources.requests && cont.resources.requests.cpu) dataArr.push(<h6 key={`${c}${nodeName}${podName}${cont.name}cpuReq`}>{`CPU: ${parseInt(cont.resources.requests.cpu, 10) / (cap.cpu * 10)}%`}</h6>);
            }
          }
        }
      }


      // for (let p = 0; p < node.pods.length; p += 1) {
      //   const pod = node.pods[p];
      //   dataArr.push(<h3 key={`${n}${p}`}>{pod.name}</h3>);
      //   for (let c = 0; c < pod.containers.length; c += 1) {
      //     const cont = pod.containers[c];
      //     dataArr.push(<h4 key={`${n}${p}${c}`}>{cont.name}</h4>);
      //     dataArr.push(<h6 key={`${n}${p}${c}cpu`}>{`CPU: ${cont.cpu}`}</h6>);
      //   }
      // }
    }

    return dataArr;
  }

  render() {
    console.log(this.props.data);
    return (
      <div>
        <div>
          <Header/>
          <Display/>
        </div>
      <div id="DashboardContainer">
        {/* <h1>DASHBOARD</h1> */}
        <div>{this.buildDataDisp()}</div>

      </div>
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
