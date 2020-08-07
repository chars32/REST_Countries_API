import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/header";
import Searchfilter from "./components/searchFilter";
import Flags from "./components/flags";

import flagsInfoData from "./scripts/allData";

const App = () => {
  const [dark, setDark] = useState(false);
  const [flagsInfo, setFlagsInfo] = useState();

  // handlers
  const handlerClick = () => {
    setDark(!dark);
  };

  const handlerRegion = async (e) => {
    const filterData = await flagsInfoData.getByRegion(e.target.value);
    setFlagsInfo(filterData);
  };

  const handleChange = async (event) => {
    if (event.target.value) {
      handlerSearch(event.target.value);
    } else {
      allFLgagsData();
    }
  };

  const handlerSearch = async (country) => {
    const data = await flagsInfoData.getBySearch(country);
    setFlagsInfo(data);
  };

  // function
  const allFLgagsData = async () => {
    const data = await flagsInfoData.getAll();
    setFlagsInfo(data);
  };

  // Seting flags info
  useEffect(() => {
    allFLgagsData();
  }, []);

  return (
    <div className={`App ${dark ? "darkApp" : "lightApp"}`}>
      <Header mode={handlerClick} dark={dark} />
      <Searchfilter dark={dark} filter={handlerRegion} change={handleChange} />
      <Flags dark={dark} flagsData={flagsInfo} />
    </div>
  );
};

export default App;
