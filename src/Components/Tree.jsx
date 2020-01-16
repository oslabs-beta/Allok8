import React, { Component } from 'react';
import Tree from 'react-d3-tree';
import { connect } from 'react-redux';

// console.log(myTreeData);

// const myTreeData = [
//   {
//     name: 'Top Level',
//     attributes: {
//       keyA: 'val A',
//       keyB: 'val B',
//       keyC: 'val C',
//     },
//     children: [
//       {
//         name: 'Level 2: A',
//         attributes: {
//           keyA: 'val A',
//           keyB: 'val B',
//           keyC: 'val C',
//         },
//         children: [
//           {
//             name: 'Level 3: C',
//             attributes: {
//               propA: 'Val A',
//               propB: 'Val B'
//             },
//             children: [
//               {
//                 name: 'Level 4: D',
//                 attributes: {
//                   propA: 'Val A',
//                 }
//               },
//               {
//                 name: 'Level 4: D',
//                 attributes: {
//                   propA: 'val A',
//                   propB: 'val B'
//                 }
//               }
//             ]
//           },
//           {
//             name: 'Level 3: C',
//             attributes: {
//               propA: 'Val A',
//               propB: 'Val B'
//             }
//           }
//         ]
//       },
//       {
//         name: 'Level 2: B',
//         attributes: {
//           pro: 'newAtt'
//         }
//       },
//     ],
//   },
// ];

const mapStateToProps = (store) => ({
  data: store.state.data
})
class TreeComponent extends Component {
  constructor(props) {
    super(props)
    this.getData = this.getData.bind(this);
  }

  getData() {
    // console.log('this is store state in Tree: ', this.props);
    const myTreeData = [
      {
        "name": "myK8Cluster",
        "attributes": {
          "attr": "cluterVal"
        },
        children: [],
      },
    ];

    for (let n = 0; n < this.props.data.nodeInfo.nodeNameArray.length; n += 1) {
      let nodeName = this.props.data.nodeInfo.nodeNameArray[n];
      let node = this.props.data.nodeInfo.nodeMetricsRaw[nodeName];
      // Construct the top level of data(nodeLevel) here
      const nodeObj = {
        "name": nodeName,
        "attributes": {
          "nodeProp1": "nodePropVal1",
          "nodeProp1": "nodePropVal1"
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
          "name": pod.metadata.name,
          "attributes": {
            "podProp": "podPropVal",
            "podProp": "podPropVal"
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
            "name": containers.name,
            "attributest": {
              "memory": parseInt(containers.usage.memory, 10),
              "contProp": "contPropVal"
            }
          };
          podObj.children.push(contObj);
        }
      }
    }
    console.log("this is my treeData: ", myTreeData);
    return myTreeData;
  }

  render() {
    // console.log("this should be props: ", this.props.data);
    return (
      <div id="treeWrapper" style={{width: '50em', height: '100em'}}>
        <Tree data={this.getData()} />
      </div>
    )
  }
}

// export default TreeComponent;
export default connect(
  mapStateToProps,
  )(TreeComponent);
