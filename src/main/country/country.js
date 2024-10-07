import "./country.css";

export default function Country({country, filterCountry, originalData}){
  function handleCountry(event, selectedCountry) {
    const updatedShows = originalData.filter(
      (show) => show.network && show.network.country.code.includes(selectedCountry)
    );
    filterCountry(updatedShows);
  }
  return(
    <button
      className="card-country"
      onClick={(event) => handleCountry(event, country.network.country.code)}
    >
    {!country.network
      ? "country unavailable"
      : country.network.country.code}{" "}
    </button>
  )
};