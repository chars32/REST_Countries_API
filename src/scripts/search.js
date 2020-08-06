const SearchFlags = async (country) => {
  try {
    const call_api = await fetch(
      `https://restcountries.eu/rest/v2/name/${country}`
    );
    const data = call_api.json();
    return data;
  } catch (error) {
    console.log("error");
  }
};

export default SearchFlags;
