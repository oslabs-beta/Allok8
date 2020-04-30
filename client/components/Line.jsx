import React from "react";
import { ResponsiveLine } from "@nivo/line";

const theme = {
  textColor: "#f7fbff",
  fontSize: 12,
  tickColor: "#f7fbff",
};

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
