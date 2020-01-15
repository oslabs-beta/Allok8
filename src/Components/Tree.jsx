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
      },
    ],
  },
];

// const myTreeData = {
//   "title": "KubernetesCluster",
//     "color": "#12939A",
//       "label": "myCluster", // This is the root
        // const myTreeData = [
        //   {
        //     "title": "Node1", "label": "ABC", // This is the Node level
        //     "children": [
        //       {
        //         "title": "Node1_pod1", "color": "#12939A",  // This is the pod level
        //         // Add children one level deeper; Container level;
        //         "children": [
        //           { "title": "Node1_pod1_container1", "color": '#12939A', "size": 3000 },
        //           { "title": "Node1_pod1_container2", "color": '#12939A', "size": 3000 }
        //         ]
        //       },
        //       { "title": "Node1_pod2", "color": "#12939A", "size": 3000 },
        //       { "title": "Node1_pod3", "color": "#12939A", "size": 3000 },
        //       { "title": "Node1_pod4", "color": "#12939A", "size": 3000 }
        //     ]
        //   },
        //   {
        //     "title": "Node2",
        //     "children": [
        //       { "title": "Node2_pod1", "color": "#12939A", "size": 3000 },
        //       { "title": "Node2_pod2", "color": "#12939A", "size": 3000 },
        //       { "title": "Node2_pod3", "color": "#12939A", "size": 3000 },
        //       { "title": "Node2_pod4", "color": "#12939A", "size": 3000 },
        //       { "title": "Node2_pod5", "color": "#12939A", "size": 3000 }
        //     ]
        //   },
        //   {
        //     "title": "Node3",
        //     "children": [
        //       { "title": "Node3_pod1", "color": "#12939A", "size": 3000 }
        //     ]
        //   }
        // ];

mapStateToProps = (store) => ({
  data: store.props.data
})
class TreeComponent extends Component {

  render() {
    return (
      <div id="treeWrapper" style={{width: '50em', height: '100em'}}>
        <Tree data={myTreeData} />
      </div>
    )
  }
}

export default TreeComponent;