import "./reset-button.css";

export default function ResetButton({ handleReset}) {
 
  return (

    <button key={"reset"} className="reset-button" onClick={handleReset}>
    {" "}
    Reset{" "}
  </button>
      

  );
}
