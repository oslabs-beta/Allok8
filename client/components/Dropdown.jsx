import React from "react";

const Dropdown = (props) => {
  return (
    <div className="dataSelector">
      <label htmlFor="data">Select data to chart:</label>
      <select
        id="data"
        defaultValue={props.method}
        onChange={(e) => props.setMethod(e.target.value)}
      >
        <option value="memory_percent">Memory Percent</option>
        <option value="memory_used">Memory Used</option>
        <option value="cpu_percent">CPU Percent</option>
        <option value="cpu_used">CPU Used</option>
      </select>
    </div>
  );
};

export default Dropdown;
