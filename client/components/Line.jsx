import React from "react";
import { ResponsiveLine } from "@nivo/line";

const theme = {
  textColor: "#f7fbff",
  fontSize: 12,
  tickColor: "#f7fbff",
};

const data = [
  {
    id: "allok8-container",
    data: [
      { x: "2020-04-25T04:46:00.000Z", y: 7.26 },
      { x: "2020-04-25T04:47:00.000Z", y: 7.26 },
      { x: "2020-04-25T04:48:00.000Z", y: 7.26 },
      { x: "2020-04-25T04:49:00.000Z", y: 7.26 },
      { x: "2020-04-25T04:50:00.000Z", y: 7.26 },
      { x: "2020-04-25T04:51:00.000Z", y: 7.26 },
      { x: "2020-04-25T04:52:00.000Z", y: 7.16 },
      { x: "2020-04-25T04:53:00.000Z", y: 7.3 },
      { x: "2020-04-25T04:54:00.000Z", y: 7.45 },
      { x: "2020-04-25T04:55:00.000Z", y: 7.3 },
      { x: "2020-04-25T04:56:00.000Z", y: 7.45 },
    ],
  },
  {
    id: "backend-container-1",
    data: [
      { x: "2020-04-25T04:46:00.000Z", y: 8.085 },
      { x: "2020-04-25T04:47:00.000Z", y: 8.085 },
      { x: "2020-04-25T04:48:00.000Z", y: 8.085 },
      { x: "2020-04-25T04:49:00.000Z", y: 8.055 },
      { x: "2020-04-25T04:50:00.000Z", y: 8.065 },
      { x: "2020-04-25T04:51:00.000Z", y: 8.075 },
      { x: "2020-04-25T04:52:00.000Z", y: 8.085 },
      { x: "2020-04-25T04:53:00.000Z", y: 8.095 },
      { x: "2020-04-25T04:54:00.000Z", y: 8.105 },
      { x: "2020-04-25T04:55:00.000Z", y: 8.095 },
      { x: "2020-04-25T04:56:00.000Z", y: 8.105 },
    ],
  },
  {
    id: "backend-container-2",
    data: [
      { x: "2020-04-25T04:46:00.000Z", y: 10.005 },
      { x: "2020-04-25T04:47:00.000Z", y: 10.005 },
      { x: "2020-04-25T04:48:00.000Z", y: 12.005 },
      { x: "2020-04-25T04:49:00.000Z", y: 16.015 },
      { x: "2020-04-25T04:50:00.000Z", y: 22.025 },
      { x: "2020-04-25T04:51:00.000Z", y: 18.035 },
      { x: "2020-04-25T04:52:00.000Z", y: 14.045 },
      { x: "2020-04-25T04:53:00.000Z", y: 12.055 },
      { x: "2020-04-25T04:54:00.000Z", y: 10.065 },
      { x: "2020-04-25T04:55:00.000Z", y: 12.055 },
      { x: "2020-04-25T04:56:00.000Z", y: 10.065 },
    ],
  },
  {
    id: "testing-docker",
    data: [
      { x: "2020-04-25T04:46:00.000Z", y: 5.996 },
      { x: "2020-04-25T04:47:00.000Z", y: 5.986 },
      { x: "2020-04-25T04:48:00.000Z", y: 5.976 },
      { x: "2020-04-25T04:49:00.000Z", y: 5.966 },
      { x: "2020-04-25T04:50:00.000Z", y: 5.956 },
      { x: "2020-04-25T04:51:00.000Z", y: 5.946 },
      { x: "2020-04-25T04:52:00.000Z", y: 5.936 },
      { x: "2020-04-25T04:53:00.000Z", y: 5.926 },
      { x: "2020-04-25T04:54:00.000Z", y: 5.916 },
      { x: "2020-04-25T04:55:00.000Z", y: 5.926 },
      { x: "2020-04-25T04:56:00.000Z", y: 5.916 },
    ],
  },
  {
    id: "postgres-1",
    data: [
      { x: "2020-04-25T04:46:00.000Z", y: 13.569 },
      { x: "2020-04-25T04:47:00.000Z", y: 14.669 },
      { x: "2020-04-25T04:48:00.000Z", y: 15.769 },
      { x: "2020-04-25T04:49:00.000Z", y: 16.869 },
      { x: "2020-04-25T04:50:00.000Z", y: 19.369 },
      { x: "2020-04-25T04:51:00.000Z", y: 23.469 },
      { x: "2020-04-25T04:52:00.000Z", y: 24.269 },
      { x: "2020-04-25T04:53:00.000Z", y: 18.169 },
      { x: "2020-04-25T04:54:00.000Z", y: 16.069 },
      { x: "2020-04-25T04:55:00.000Z", y: 18.169 },
      { x: "2020-04-25T04:56:00.000Z", y: 16.069 },
    ],
  },
  {
    id: "postgres-2",
    data: [
      { x: "2020-04-25T04:46:00.000Z", y: 23.869 },
      { x: "2020-04-25T04:47:00.000Z", y: 23.769 },
      { x: "2020-04-25T04:48:00.000Z", y: 23.669 },
      { x: "2020-04-25T04:49:00.000Z", y: 23.569 },
      { x: "2020-04-25T04:50:00.000Z", y: 23.469 },
      { x: "2020-04-25T04:51:00.000Z", y: 23.369 },
      { x: "2020-04-25T04:52:00.000Z", y: 23.269 },
      { x: "2020-04-25T04:53:00.000Z", y: 23.169 },
      { x: "2020-04-25T04:54:00.000Z", y: 23.069 },
      { x: "2020-04-25T04:55:00.000Z", y: 23.169 },
      { x: "2020-04-25T04:56:00.000Z", y: 23.069 },
    ],
  },
];

function MyResponsiveLine(props) {
  if (props.method === "memory_percent" || props.method === "cpu_percent") {
    return (
      <ResponsiveLine
        data={props.data}
        margin={{ top: 50, right: 150, bottom: 50, left: 60 }}
        xScale={{
          type: "time",
          format: "%Y-%m-%dT%H:%M:%S.%LZ",
          precision: "minute",
        }}
        xFormat="time:%H:%M"
        yFormat={(y) => `${y}%`}
        yScale={{
          type: "linear",
          min: 0,
          max: 100,
          stacked: true,
          reverse: false,
        }}
        curve="catmullRom"
        axisTop={{
          format: "%H:%M",

          orient: "top",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: 10,
          legendPosition: "middle",
        }}
        axisRight={null}
        axisBottom={{
          format: "%H:%M",
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "time",
          legendOffset: 100,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickValues: 10,
          format: (y) => `${y}%`,
          legend: "Memory Percent",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: -80,
          legendPosition: "middle",
        }}
        colors={{ scheme: "blues" }}
        pointSize={8}
        pointColor={{ from: "color", modifiers: [] }}
        pointBorderWidth={1}
        pointBorderColor="black"
        pointLabel="y"
        pointLabelYOffset={-12}
        enableArea={true}
        enableSlices="x"
        sliceTooltip={({ slice }) => {
          return (
            <div
              style={{
                background: "rgb(50, 50, 50)",
                padding: "9px 12px",
                border: "1px solid #d6e7f4",
              }}
            >
              {slice.points.map((point) => (
                <div
                  key={point.id}
                  style={{
                    color: point.serieColor,
                    padding: "3px 0",
                  }}
                >
                  <strong>{point.serieId}:</strong> {point.data.yFormatted}
                </div>
              ))}
            </div>
          );
        }}
        areaBlendMode="normal"
        areaOpacity={0.8}
        useMesh={true}
        itemTextColor="white"
        theme={theme}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            itemTextColor: "#ffffff",
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    );
  } else if (props.method === "memory_used") {
    return (
      <ResponsiveLine
        data={props.data}
        margin={{ top: 50, right: 150, bottom: 50, left: 60 }}
        xScale={{
          type: "time",
          format: "%Y-%m-%dT%H:%M:%S.%LZ",
          precision: "minute",
        }}
        xFormat="time:%H:%M"
        yFormat={(y) => `${y}Ki`}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        curve="catmullRom"
        axisTop={{
          format: "%H:%M",

          orient: "top",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: 10,
          legendPosition: "middle",
        }}
        axisRight={null}
        axisBottom={{
          format: "%H:%M",
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "time",
          legendOffset: 100,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickValues: 10,
          format: (y) => `${y}Ki`,
          legend: "Memory Percent",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: -80,
          legendPosition: "middle",
        }}
        colors={{ scheme: "blues" }}
        pointSize={8}
        pointColor={{ from: "color", modifiers: [] }}
        pointBorderWidth={1}
        pointBorderColor="black"
        pointLabel="y"
        pointLabelYOffset={-12}
        enableArea={true}
        enableSlices="x"
        sliceTooltip={({ slice }) => {
          return (
            <div
              style={{
                background: "rgb(50, 50, 50)",
                padding: "9px 12px",
                border: "1px solid #d6e7f4",
              }}
            >
              {slice.points.map((point) => (
                <div
                  key={point.id}
                  style={{
                    color: point.serieColor,
                    padding: "3px 0",
                  }}
                >
                  <strong>{point.serieId}:</strong> {point.data.yFormatted}
                </div>
              ))}
            </div>
          );
        }}
        areaBlendMode="normal"
        areaOpacity={0.8}
        useMesh={true}
        itemTextColor="white"
        theme={theme}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            itemTextColor: "#ffffff",
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    );
  } else if (props.method === "cpu_used") {
    return (
      <ResponsiveLine
        data={props.data}
        margin={{ top: 50, right: 150, bottom: 50, left: 60 }}
        xScale={{
          type: "time",
          format: "%Y-%m-%dT%H:%M:%S.%LZ",
          precision: "minute",
        }}
        xFormat="time:%H:%M"
        yFormat={(y) => `${y}n`}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        curve="catmullRom"
        axisTop={{
          format: "%H:%M",

          orient: "top",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: 10,
          legendPosition: "middle",
        }}
        axisRight={null}
        axisBottom={{
          format: "%H:%M",
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "time",
          legendOffset: 100,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickValues: 10,
          format: (y) => `${y}n`,
          legend: "Memory Percent",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: -80,
          legendPosition: "middle",
        }}
        colors={{ scheme: "blues" }}
        pointSize={8}
        pointColor={{ from: "color", modifiers: [] }}
        pointBorderWidth={1}
        pointBorderColor="black"
        pointLabel="y"
        pointLabelYOffset={-12}
        enableArea={true}
        enableSlices="x"
        sliceTooltip={({ slice }) => {
          return (
            <div
              style={{
                background: "rgb(50, 50, 50)",
                padding: "9px 12px",
                border: "1px solid #d6e7f4",
              }}
            >
              {slice.points.map((point) => (
                <div
                  key={point.id}
                  style={{
                    color: point.serieColor,
                    padding: "3px 0",
                  }}
                >
                  <strong>{point.serieId}:</strong> {point.data.yFormatted}
                </div>
              ))}
            </div>
          );
        }}
        areaBlendMode="normal"
        areaOpacity={0.8}
        useMesh={true}
        itemTextColor="white"
        theme={theme}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            itemTextColor: "#ffffff",
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    );
  }
}

export default MyResponsiveLine;
