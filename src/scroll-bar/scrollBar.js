import "./scroll-bar.css";
import ResetButton from "./reset-button/reset-button";
export default function ScrollBar({ handleReset}) {
 
  return (

    <div className="scroll-bar">
      <ResetButton handleReset={handleReset} />
      {/* replace all the following buttons with todo list buttons */}
      <ResetButton handleReset={handleReset} />
      <ResetButton handleReset={handleReset} />
      <ResetButton handleReset={handleReset} />
    </div>
  );
}
