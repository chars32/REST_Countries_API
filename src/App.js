import React from "react";
import "./App.css";

import Header from "./components/header";
import Searchfilter from "./components/searchFilter";
import Flags from "./components/flags";

function App() {
  return (
    <div className="App">
      <Header />
      <Searchfilter />
      <Flags />
    </div>
  );
}

export default App;
