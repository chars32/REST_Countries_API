import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/header";
import Searchfilter from "./components/searchFilter";
import Flags from "./components/flags";

const {AllFlags, FilterByRegionFlags} = require ('./scripts/data')

const App = () => {
  const [dark, setDark] = useState(false);
  const [flagsInfo, setFlagsInfo] = useState();

  const handlerClick = () => {
    setDark(!dark);
  };

  const handlerRegion = (e) => {
    const filterData = FilterByRegionFlags(e.target.value);
    (async function () {
      const data = await filterData;
      setFlagsInfo(data);
    })();
  };

  const allFLgagsData = async () => {
    const data = await AllFlags();
    setFlagsInfo(data);
  };

  useEffect(() => {
    allFLgagsData();
  }, []);

  return (
    <div className={`App ${dark ? "darkApp" : "lightApp"}`}>
      <Header mode={handlerClick} dark={dark} />
      <Searchfilter dark={dark} filter={handlerRegion} />
      <Flags dark={dark} flagsData={flagsInfo} />
    </div>
  );
};

export default App;
