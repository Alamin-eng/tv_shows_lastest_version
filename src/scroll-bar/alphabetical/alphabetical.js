import React from 'react';
import { FaSortAlphaUp} from "react-icons/fa";
export default function Alphabetical ({handleAlphabetical}) {
  return (
    <button key={"alphabetical-az"} className="alphabetical-az" onClick={handleAlphabetical}>
    {" "}
    Alphabetical{" "}  <FaSortAlphaUp color='green'/>
  </button>
  );
};