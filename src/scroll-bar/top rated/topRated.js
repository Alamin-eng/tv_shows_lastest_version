import React from 'react';
import { FaSortNumericUpAlt} from "react-icons/fa";
export default function TopRated ({handleRatings}) {
  return (
    <button key={"top-rated"} className="top-rated" onClick={handleRatings}>
    {" "}
    Ratings {" "} <FaSortNumericUpAlt color='green'/>
  </button>
  );
};
