import React, { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {size: 5}
  }

  render() {
    let rows = [];
    for (let i = 0; i < this.state.size; i += 1) {
      let rowId = `row${i}`;
      let cell = [];
      for (let j = 0; j < this.state.size; j += 1) {
        let cellId = `cell${i} - ${j}`;
        cell.push(<td key={cellId} id={cellId}>I'm columns</td>)
      }
      rows.push(<tr key={i} id={rowId}>I'm rows{cell}</tr>)
    }
    return(
      <div className="tabContainer">
        <div className="row">
          <div className="col">
            <table id="simple-table">
              <tbody>
                <h1>Table Component</h1>
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