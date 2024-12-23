import React from 'react';
export default function TypeScripted({handleTypeScripted}) {
  return (
    <button key={"type-Scripted"} className="type-Scripted" onClick={handleTypeScripted}>
    {" "}
    Scripted{" "}
  </button>
  );
};