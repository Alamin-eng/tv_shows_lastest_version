import "./main.css";
import { useEffect, useState } from "react";

const data = require("../shows.json"); // code to fetch api data to replace these static json data

export default function Main() {
  return (
    <div className="main">
    <h1>{data.length}</h1>
    
      {" "}
      {data.map((show) => {
        return (
          <div className="main-card">
            <img className="card-image" src={`${!show.image.original ? show.image.medium : show.image.original}`} alt={`${show.name} original banner`}/>
            <div className="main-texts"> 
            <div className="card-name">{show.name && show.name}</div>
            <div className="card-rating">{show.rating && show.rating.average}</div>
            <div className="card-country">
              {!show.network ? "data unavailable" : show.network.country.name}
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <span>{show.genres[0]} </span>
              <span>{show.genres[1]} </span>
            </div>
            <div className="main-network">{show.network && show.network.name} </div>
            </div>
          </div>
        );
      })}{" "}
    </div>
  );
}
