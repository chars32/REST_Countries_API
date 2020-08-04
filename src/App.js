import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/header";
import Searchfilter from "./components/searchFilter";
import Flags from "./components/flags";

import AllFlags from './scripts/data'
import FilterByRegionFlags from './scripts/filter'
import SearchFlags from './scripts/search'


const App = () => {
  const [dark, setDark] = useState(false);
  const [flagsInfo, setFlagsInfo] = useState();

  // handlers

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

  const handlerSearch = (event) => {
    if (event.key === "Enter") {
      (async function () {
        const data = await SearchFlags(event.target.value)
        setFlagsInfo(data)
      })();
    }
  }

  // function  
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
      <Searchfilter dark={dark} filter={handlerRegion} search={handlerSearch} />
      <Flags dark={dark} flagsData={flagsInfo} />
    </div>
  );
};

export default App;
