import React from "react";

import "./header.css";

import moon from "../img/svg/001-moon.svg";
import sun from "../img/svg/sun (1).svg";

const Header = (props) => {
  console.log(props);
  return (
    <div className={`Header ${props.dark ? "darkHeader" : "lightHeader"}`}>
      <p>Where in the world?</p>
      <div className="Darkmode" onClick={props.mode}>
        <img src={props.dark ? sun : moon} alt="" />
        <p>{props.dark ? "Light Mode" : "Dark Mode"}</p>
      </div>
    </div>
  );
};

export default Header;
