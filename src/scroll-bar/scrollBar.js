import "./scroll-bar.css";
import ResetButton from "./reset-button/reset-button";
import TopRated from "./top rated/topRated";
import Alphabetical from "./alphabetical/alphabetical";
export default function ScrollBar({ handleReset, handleRatings, handleAlphabetical }) {
 
  return (

    <div className="scroll-bar" key={"scroll-bar"}>
      <ResetButton handleReset={handleReset} />
      {/* replace all the following buttons with todo list buttons */}
      <TopRated handleRatings={handleRatings}/>
      <Alphabetical handleAlphabetical={handleAlphabetical}/>
    </div>
  );
}
