import React from "react";

function DisplaySoftSkills(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      {Object.entries(props.softSkills)
        .filter((item) => item[1].score !== 0)
        .sort((a, b) => b[1].score - a[1].score)
        .map((item, i) => {
          return (
            <div className="softSkill" key={i}>
              {/* <h2> {item[0]} </h2> */}
              <h3>
                <progress id="score" max="1" value={item[1].score}>
                  {" "}
                  {Math.round(item[1].score * 10000) / 100 + " % "}
                </progress>{" "}
                <label htmlFor="score">
                  {" "}
                  {Math.round(item[1].score * 10000) / 100 + " % "}
                </label>{" "}
                {item[1].summary}
              </h3>
              <p> {item[1].details} </p>
            </div>
          );
        })}
    </div>
  );
}

export default DisplaySoftSkills;
