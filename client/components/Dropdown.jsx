import React from "react";

const Dropdown = (props) => {
  return (
    <div class="dataSelector">
      <label for="data">Select data to chart:</label>
      <select id="data">
        <option value="memoryPercent">Memory Percent</option>
        <option value="memoryUsed">Memory Used</option>
        <option value="cpuPercent">CPU Percent</option>
        <option value="cpuUsed">CPU Used</option>
      </select>
    </div>
  );
};

export default Dropdown;
