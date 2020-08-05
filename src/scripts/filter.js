const FilterByRegionFlags = async (continet) => {
  const api_call = await fetch(
    `https://restcountries.eu/rest/v2/region/${continet}`
  );
  const data = await api_call.json();
  return data;
};

export default FilterByRegionFlags