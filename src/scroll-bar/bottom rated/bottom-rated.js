import React from 'react';
import { FaSortNumericDownAlt} from "react-icons/fa";
export default function BottomRated ({handleRatingsBottom}) {
  return (
    <button key={"bottom-rated"} className="bottom-rated" onClick={handleRatingsBottom}>
    {" "}
    Ratings {" "} <FaSortNumericDownAlt color='green'/>
  </button>
  );
};