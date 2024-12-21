import React from 'react';

export default function TopRated ({handleRatings}) {
  return (
    <button key={"reset"} className="top-rated" onClick={handleRatings}>
    {" "}
    Ratings{" "}
  </button>
  );
};
