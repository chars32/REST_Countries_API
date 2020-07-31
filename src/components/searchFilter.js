import React from "react";

import "./searchFilter.css";

const Searchfilter = () => {
  return (
    <div className="searchFilterContainer">
      <div className="searchContainer">
        <input
          type="text"
          name="searchFlags"
          placeholder="&#128269; Search for country..."
        />
      </div>
      <div className="selectContainer">
        <select className="selectRegion" required>
          <option disabled value="filter" selected>
            Filter by region
          </option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Searchfilter;
