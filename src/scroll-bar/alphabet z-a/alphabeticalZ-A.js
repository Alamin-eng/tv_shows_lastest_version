import React from 'react';
import { FaSortAlphaDownAlt} from "react-icons/fa";
export default function AlphabeticalZtoA ({handleAlphabeticalZtoA}) {
  return (
    <button key={"alphabetical-za"} className="alphabetical-za" onClick={handleAlphabeticalZtoA}>
    {" "}
    Alphabetical{" "}  <FaSortAlphaDownAlt color='green'/>
  </button>
  );
};