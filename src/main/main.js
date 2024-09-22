import "./main.css";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Genre from "../genre/genre";
const data = require("../shows.json"); // code to fetch api data to replace these static json data

export default function Main() {
  const [filter, setFilter] = useState(data);

 // handle reset
  function handleReset() {
    setFilter(data);
  }
  return (
    <div className="main">
      
        <button key={"reset"} className="reset-button" onClick={handleReset}>
          {" "}
          Reset{" "}
        </button>
      
      {filter.map((show, index) => {
        return (
          <div className="main-card" key={index}>
            <img
              className="card-image"
              src={`${
                !show.image.original ? show.image.medium : show.image.original
              }`}
              alt={`${show.name} original banner`}
            />
            <div className="main-texts">
              <div className="name-and-rating-container">
                <div className="card-name">{show.name && show.name}</div>
                <div className="card-rating">
                  <FaStar color="yellow" fillOpacity={0.9} />{" "}
                  <div>{show.rating && show.rating.average}</div>
                </div>
              </div>
              <div className="card-country">
                {!show.network
                  ? "country unavailable"
                  : show.network.country.name}
              </div>
              
              <Genre genre={show} setGenre={setFilter} originalData={filter}/>

              <div className="main-network">
                {!show.network ? "Network unavailable" : show.network.name}{" "}
              </div>
            </div>
          </div>
        );
      })}{" "}
    </div>
  );
}
  