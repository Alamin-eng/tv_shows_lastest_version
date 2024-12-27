import React from 'react';
export default function TypeDocumentary({handleTypeDocumentary}) {
  return (
    <button key={"type-Documentary"} className="type-Documentary" onClick={handleTypeDocumentary}>
    {" "}
    Documentary{" "} 
  </button>
  );
};