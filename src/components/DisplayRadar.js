import React from "react";
import { Radar } from "@nivo/radar";
import softSkills from "../data/softSkills.json"

// const listeCodeRome = require("../data/softSkills.json");
const listeCodeRome = Object.keys(softSkills).map((key) => {
  return softSkills[key];
});

const DisplayRadar = () => (
  <div className="radar">
    <h3>Representation graphique des Soft Skills</h3>
    <Radar
      width={600}
      height={600}
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      data={listeCodeRome}
      indexBy="summary"
      keys={["score", "details"]}
      maxValue={1}
      colors={["#ddcb38", "#2b70e2"]}
      dotSize={60}
      dotColor="aqua"
      dotBorderWidth={7}
      borderColor="LawnGreen"
      gridLevels={6}
      gridLabelOffset={5}
      enableDotLabel={true}
      legends={[
        {
          anchor: "top-left",
          direction: "row",
          translateX: -50,
          translateY: -40,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: "black",
          symbolSize: 16,
          symbolShape: "diamond",
        },
      ]}
    />
  </div>
);

export default DisplayRadar;
