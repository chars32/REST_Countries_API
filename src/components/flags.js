import React from "react";

import { flagsList } from "../flagsList";

import "./flags.css";

const Flags = (props) => {
  // console.log(flagsList[0].name);
  return (
    <div className="flagsContainer">
      {flagsList.map((data, key) => {
        return (
          <div
            className={`flagContainer ${props.dark ? "darkFlagContainer" : ""}`}
            key={key}
          >
            <img src={data.flag} alt="" />
            <div className="flagContainerInfo">
              <h3>{data.name}</h3>
              <p>
                Population: <span>{data.population}</span>
              </p>
              <p>
                Region: <span>{data.region}</span>
              </p>
              <p>
                Capital: <span>{data.capital}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Flags;
