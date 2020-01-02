import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitApiToken } from '../Actions/actionCreator.js';
import * as types from '../Actions/actionTypes';
// We will be doing fetches so we will need thunks
import thunks from '../Middleware/thunkMiddleware.js';


const mapStateToProps = (store) => ({
  data: store.state.data,
});

const mapDispatchToProps = (dispatch) => ({});


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.buildDataDisp = this.buildDataDisp.bind(this);
  }

  buildDataDisp() {
    const { data } = this.props;
    const dataArr = [];
    dataArr.push(<h1 key="cluster">{data.name}</h1>);
    for (let n = 0; n < data.nodeInfo.nodeNameArray.length; n += 1) {
      const nodeName = data.nodeInfo.nodeNameArray[n];
      dataArr.push(<h2 key={n}>{nodeName}</h2>);
      if (data.nodeInfo.nodeMetricsRaw[nodeName]) {
        const nodeMetrics = data.nodeInfo.nodeMetricsRaw[nodeName];
        const nodeMetricKeys = Object.keys(data.nodeInfo.nodeMetricsRaw[nodeName]);
        // for (let m = 0; m < nodeMetricKeys.length; m += 1) {
        //   dataArr.push(<h6 key={`${nodeName}${nodeMetricKeys[m]}`}>{`${nodeMetricKeys[m]}: ${nodeMetrics[nodeMetricKeys[m]]}`}</h6>);
        // }
        dataArr.push(<h6 key={`${nodeName}cpuCap`}>{`CPU Capacity: ${nodeMetrics.capacity.memory}`}</h6>);

        for (let p = 0; p < data.podInfo.podNameArray.length; p += 1) {
          const podName = data.podInfo.podNameArray[p];
          const podInfo = data.podInfo.podInfo[podName];
          if (podInfo.spec.nodeName === nodeName) {
            dataArr.push(<h3 key={`${podName}`}>{podName}</h3>);
            for (let c = 0; c < podInfo.spec.containers.length; c += 1) {
              const contName = podInfo.spec.containers[c].name;
              dataArr.push(<h4 key={`${contName}`}>{contName}</h4>);
              dataArr.push(<h6 key={`${contName}cpuReq`}>{`CPU Requests : ${podInfo.spec.containers[c].resources.requests.cpu}`}</h6>);
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
      <div id="DashboardContainer">
        {/* <h1>DASHBOARD</h1> */}
        <div>{this.buildDataDisp()}</div>

      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
