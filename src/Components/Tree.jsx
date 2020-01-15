import React, { Component } from 'react';
import Tree from 'react-d3-tree';

// console.log(myTreeData);

const myTreeData = [
  {
    name: 'Top Level',
    attributes: {
      keyA: 'val A',
      keyB: 'val B',
      keyC: 'val C',
    },
    children: [
      {
        name: 'Level 2: A',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
        children: [
          {
            name: 'Level 3: C',
            attributes: {
              propA: 'Val A',
              propB: 'Val B'
            },
            children: [
              {
                name: 'Level 4: D',
                attributes: {
                  propA: 'Val A',
                }
              },
              {
                name: 'Level 4: D',
                attributes: {
                  propA: 'val A',
                  propB: 'val B'
                }
              }
            ]
          },
          {
            name: 'Level 3: C',
            attributes: {
              propA: 'Val A',
              propB: 'Val B'
            }
          }
        ]
      },
      {
        name: 'Level 2: B',
        attributes: {
          pro: 'newAtt'
        }
      },
    ],
  },
];

// mapStateToProps = (store) => ({
//   data: store.props.data
// })
class TreeComponent extends Component {

 
  loadData() {
    const myTreeData = [];

    for (let n = 0; n < this.props.data.nodeInfo.nodeNameArray.length; n += 1) {
      let nodeName = this.props.data.nodeInfo.nodeNameArray[n];
      let node = this.props.data.nodeInfo.nodeMetricsRaw[nodeName];
      // Construct the top level of data(nodeLevel) here
      myTreeData.push({
        "name": nodeName,
        "attributes": {
          "nodeProp1": "nodePropVal1",
          "nodeProp1": "nodePropVal1"
        }
      });
      for (let p = 0; p < node.pods.length; p += 1) {
        let pod = node.pods[i];
        // Construct the second level of data(podLevel) here

        for (let c = 0; p < pod.podUsage.containers.length; c += 1) {
          let containers = pod.podUsage.containers[c];

          // Contruct the third level of data(containerLevel) here

        }
      }
    }
    return myTreeData;
  }

  render() {
    return (
      <div id="treeWrapper" style={{width: '500px', height: '700px'}}>
        <Tree data={myTreeData} />
      </div>
    )
  }
}

export default TreeComponent;
