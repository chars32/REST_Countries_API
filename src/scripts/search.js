const SearchFlags = async (country) => {
  const call_api = await fetch (`https://restcountries.eu/rest/v2/name/${country}`)
  const data = call_api.json()
  return data
}

export default SearchFlags