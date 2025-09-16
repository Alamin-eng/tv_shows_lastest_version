import { FaSuperpowers} from "react-icons/fa";
export default function ResetButton({ handleReset}) {
 
  return (
    <button key={"reset"} className="reset-button" onClick={handleReset}>
    {" "}
    Reset {"  "}<FaSuperpowers color="red"/> 
  </button>
  );
}
