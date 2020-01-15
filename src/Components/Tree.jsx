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
      },
      {
        name: 'Level 2: B',
      },
    ],
  },
];
class TreeComponent extends Component {

  render() {
    return (
      <div id="treeWrapper" style={{width: '50em', height: '200em'}}>
        <Tree data={myTreeData} />
      </div>
    )
  }
}

export default TreeComponent;