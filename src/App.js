import React, { useState } from "react";
import "./App.css";

import Header from "./components/header";
import Searchfilter from "./components/searchFilter";
import Flags from "./components/flags";

const App = () => {
  const [dark, setDark] = useState(false);

  const handlerClick = () => {
    setDark(!dark);
  };

  return (
    <div className={`App ${dark ? "darkApp" : "lightApp"}`}>
      <Header mode={handlerClick} dark={dark} />
      <Searchfilter dark={dark} />
      <Flags dark={dark} />
    </div>
  );
};

export default App;
