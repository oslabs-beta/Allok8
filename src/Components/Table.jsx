import React, { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {size: 5}
  }

  render() {
    const tableStyle = {
      "border": "1px solid black"
    };
    let rows = [];
    for (let i = 0; i < this.state.size; i += 1) {
      let rowId = `row${i}`;
      let cell = [];
      for (let j = 0; j < this.state.size; j += 1) {
        let cellId = `cell${i} - ${j}`;
        cell.push(<td key={cellId} id={cellId}>I am tabData</td>)
      }
      rows.push(<tr key={i} id={rowId}>{cell}</tr>)
    }
    return(
      <div className="tabContainer">
        <div className="row">
          <div className="col">
            <table id="table" style={tableStyle}>
              <tbody style={tableStyle}>
                {rows}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}




export default Table;