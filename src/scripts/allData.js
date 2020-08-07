const flagsInfoData = {
  getAll: async () => {
    const api_call = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await api_call.json();
    return data;
  },
  getByRegion: async (continent) => {
    const api_call = await fetch(
      `https://restcountries.eu/rest/v2/region/${continent}`
    );
    const data = await api_call.json();
    return data;
  },
  getBySearch: async (country) => {
    const call_api = await fetch(
      `https://restcountries.eu/rest/v2/name/${country}`
    );
    const data = call_api.json();
    return data;
  },
};

export default flagsInfoData;
