const AllFlags = async () => {
  const api_call = await fetch("https://restcountries.eu/rest/v2/all");
  const data = await api_call.json();
  return data;
};

export default AllFlags
