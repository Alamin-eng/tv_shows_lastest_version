import "./main.css";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Genre from "./genre/genre";
import Network from "./network/network";
import Country from "./country/country";
import ScrollBar from "../scroll-bar/scrollBar";
const data = require("../shows.json"); // code to fetch api data to replace these static json data

export default function Main() {
  const [filter, setFilter] = useState(data);
  const [originalData] = useState(data);
 // handle reset
  function handleReset() {
    setFilter(data);
  }
  return (
    <div className="main">
      
        <ScrollBar handleReset={handleReset} />
      
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
            <Country country={show} filterCountry={setFilter} originalData={originalData}/>

            <div className="main-texts">
              <div className="name-and-rating-container">
                <div className="card-name">{show.name && show.name}</div>
                <div className="card-rating">
                  <FaStar color="orange" fillOpacity={1} />{" "}
                  <div>{show.rating && show.rating.average % 1 === 0 ? show.rating.average + ".0" : show.rating.average}</div>
                </div>
              </div>
              
              <Genre genre={show} setGenre={setFilter} originalData={originalData}/>

              <Network show={show} fileterNetwork={setFilter} originalData={originalData}/>
            </div>
          </div>
        );
      })}{" "}
    </div>
  );
}
