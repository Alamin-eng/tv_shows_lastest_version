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
  // handle ratings
  function handleRatings() {
    const ratings = [...data].sort((a, b) => {
      if (a.rating && b.rating) {
        return b.rating.average - a.rating.average;
      }
      return 0;
    });
    setFilter(ratings);
  };
  // handle ratings bottom
  function handleRatingsBottom() {
    const ratings = [...data].sort((a, b) => {
      if (a.rating && b.rating) {
        return a.rating.average - b.rating.average;
      }
      return 0;
    });
    setFilter(ratings);
  };
// handle alphabetical
  function handleAlphabetical() {
    const alphabetical = [...data].sort((a, b) => {
      if (a.name && b.name) {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
    setFilter(alphabetical);
  };
// handle alphabetical z-a
function handleAlphabeticalZtoA() {
  const alphabetical = [...data].sort((a, b) => {
    if (a.name && b.name) {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });
  setFilter(alphabetical);
};
// handle type animation
   function handleTypeAnimation() { 
    const animations = data.filter(show => show.type && show.type.includes("Animation"));
    setFilter(animations);
   }
// handle type reality  
function handleTypeReality() { 
  const reality = data.filter(show => show.type && show.type.includes("Reality"));
  setFilter(reality);
}
// handle type talkshow
function handleTypeTalkshow() { 
  const talkShow = data.filter(show => show.type && show.type.includes("Talk Show"));
  setFilter(talkShow);
}
// handle type Scripted
function handleTypeScripted() { 
  const scripted = data.filter(show => show.type && show.type.includes("Scripted"));
  setFilter(scripted);
}
  return (
    <div className="main-container">
   
    <ScrollBar handleReset={handleReset} handleRatings={handleRatings} handleRatingsBottom={handleRatingsBottom} handleAlphabetical={handleAlphabetical} handleAlphabeticalZtoA={handleAlphabeticalZtoA}
    handleTypeAnimation={handleTypeAnimation} 
    handleTypeReality={handleTypeReality}
    handleTypeTalkshow={handleTypeTalkshow}
    handleTypeScripted={handleTypeScripted} />
    <div className="main">
      
      {Array.isArray(filter) && filter.map((show, index) => {
        return (
          <div className="main-card" key={index}>
            <img
              className="card-image"
              src={show.image && show.image.original ? show.image.original : (show.image && show.image.medium ? show.image.medium : 'default-image-url')}
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
    </div>
  );
}
