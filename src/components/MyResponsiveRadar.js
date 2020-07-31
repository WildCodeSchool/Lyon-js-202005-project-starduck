import React from "react";
import { ResponsiveRadar } from "@nivo/radar";


// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const MyResponsiveRadar = ({ keys, data }) => (
  <ResponsiveRadar
    data={data}
    keys={keys}
    indexBy="summary"
    maxValue={1}
    margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
    curve="linearClosed"
    borderWidth={2}
    borderColor={{ from: "color" }}
    gridLevels={10}
    gridShape="circular"
    gridLabelOffset={36}
    enableDots={true}
    dotSize={10}
    dotColor={{ theme: "background" }}
    dotBorderWidth={2}
    dotBorderColor={{ from: "color" }}
    enableDotLabel={true}
    dotLabel={(d) => `${Math.round(d.value * 10000) / 100} %`}
    dotLabelYOffset={-12}
    colors={["#f6b83c", "#dc7f9b"]}
    fillOpacity={0.25}
    blendMode="normal"
    animate={true}
    motionStiffness={90}
    motionDamping={15}
    isInteractive={true}
    legends={[
      {
        anchor: "top-left",
        direction: "column",
        translateX: -50,
        translateY: -40,
        itemWidth: 80,
        itemHeight: 20,
        itemTextColor: "#999",
        symbolSize: 12,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
            },
          },
        ],
      },
    ]}
    tooltipFormat={(value, key) => {
      return Math.round(value * 10000) / 100 + " %";
    }}
  />
);

export default MyResponsiveRadar;
