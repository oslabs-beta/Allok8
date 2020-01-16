import React, { Component } from 'react';
import Tree from 'react-d3-tree';
import { connect } from 'react-redux';


const mapStateToProps = (store) => ({
  data: store.state.data,
});
class TreeComponent extends Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
  }

  getData() {
    // console.log('this is store state in Tree: ', this.props);
    const myTreeData = [
      {
        name: 'myK8Cluster',
        attributes: {
          // "attr": "cluterVal"
        },
        children: [],
      },
    ];

    for (let n = 0; n < this.props.data.nodeInfo.nodeNameArray.length; n += 1) {
      const nodeName = this.props.data.nodeInfo.nodeNameArray[n];
      const node = this.props.data.nodeInfo.nodeMetricsRaw[nodeName];
      // Construct the top level of data(nodeLevel) here
      const nodeObj = {
        name: nodeName,
        attributes: {
          // "nodeProp1": "nodePropVal1",
          // "nodeProp1": "nodePropVal1"
        },
        nodeSvgShape: {
          shapeProps: {
            fill: 'red',
          },
        },
        children: [],
      };
      myTreeData[0].children.push(nodeObj);
      // console.log("this is myTreeData array: ", myTreeData);
      for (let p = 0; p < node.pods.length; p += 1) {
        const pod = node.pods[p];
        // Construct the second level of data(podLevel) here
        // console.log("this should be pod name: ", pod);
        const podObj = {
          name: pod.metadata.name,
          attributes: {
            // "podProp": "podPropVal",
            // "podProp": "podPropVal"
          },
          nodeSvgShape: {
            shapeProps: {
              fill: 'red',
            },
          },
          children: [],
        };
        nodeObj.children.push(podObj);

        for (let c = 0; c < pod.podUsage.containers.length; c += 1) {
          const containers = pod.podUsage.containers[c];
          // Contruct the third level of data(containerLevel) here
          // console.log("this should be cont name: ", containers);
          // console.log("this should be cont name: ",containers, ", ", pod.podUsage.containers, c);

          const contObj = {
            name: containers.name,
            attributest: {
              // "memory": parseInt(containers.usage.memory, 10),
              // "contProp": "contPropVal"
            },
          };
          podObj.children.push(contObj);
        }
      }
    }
    console.log('this is my treeData: ', myTreeData);
    return myTreeData;
  }

  render() {
    // console.log("this should be props: ", this.props.data);
    return (
      <div id="treeWrapper" className="max">
        <Tree
          data={this.getData()}
          orientation="vertical"
          translate={{ x: 100, y: 50 }}
          circleRadius={10}
        />
      </div>
    );
  }
}

// export default TreeComponent;
export default connect(
  mapStateToProps,
)(TreeComponent);
