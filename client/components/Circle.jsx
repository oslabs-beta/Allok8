import React from "react";
import { ResponsiveBubble } from "@nivo/circle-packing";

const data = {
  name: "minikube",
  children: [
    {
      name: "backend-5b646c545d-8tzzr",
      children: [
        { name: "backend-container-1", val: 35000 },
        { name: "backend-container-2", val: 30000 },
      ],
    },
    {
      name: "frontend-5c65d4f784-wctl4",
      children: [{ name: "testing-docker", val: 45000 }],
    },
    {
      name: "postgres-576d8cd8f8-rdwtx",
      children: [
        { name: "postgres-1", val: 75000 },
        { name: "postgres-2", val: 55000 },
      ],
    },
    {
      name: "allok8-79fb795f9d-kwnng",
      children: [{ name: "allok8-container", val: 15000 }],
    },
  ],
};

const MyResponsiveBubble = () => (
  <ResponsiveBubble
    root={data}
    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    identity="name"
    value="val"
    colors={{ scheme: "blues" }}
    padding={6}
    labelTextColor={{ from: "color", modifiers: [["darker", 0.8]] }}
    borderWidth={1}
    borderColor="black"
    defs={[
      {
        id: "lines",
        type: "patternLines",
        background: "none",
        color: "inherit",
        spacing: 10,
        rotation: 45,
        lineWidth: 6,
      },
    ]}
    fill={[{ match: { depth: 1 }, id: "lines" }]}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
);

export default MyResponsiveBubble;
