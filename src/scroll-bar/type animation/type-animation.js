import React from 'react';
export default function TypeAnimation({handleTypeAnimation}) {
  return (
    <button key={"type-animation"} className="type-animation" onClick={handleTypeAnimation}>
    {" "}
    Animation{" "}
  </button>
  );
};