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

// mapStateToProps = (store) => ({
//   data: store.props.data
// })
class TreeComponent extends Component {

  render() {
    return (
      <div id="treeWrapper" style={{width: '500px', height: '700px'}}>
        <Tree data={myTreeData} />
      </div>
    )
  }
}

export default TreeComponent;
