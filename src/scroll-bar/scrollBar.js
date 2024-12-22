import "./scroll-bar.css";
import ResetButton from "./reset-button/reset-button";
import TopRated from "./top rated/topRated";
import BottomRated from "./bottom rated/bottom-rated";
import Alphabetical from "./alphabetical/alphabetical";
import AlphabeticalZtoA from "./alphabet z-a/alphabeticalZ-A";
import TypeAnimation from "./type animation/type-animation";
import TypeReality from "./type reality/type-reality";
import TypeTalkshow from "./type talkshow/type-talkshow";
export default function ScrollBar({ handleReset, handleRatings, handleRatingsBottom, handleAlphabetical,handleAlphabeticalZtoA, handleTypeAnimation, handleTypeReality, handleTypeTalkshow }) {
 
  return (

    <div className="scroll-bar" key={"scroll-bar"}>
      <ResetButton handleReset={handleReset} />
      {/* replace all the following buttons with todo list buttons */}
      <TopRated handleRatings={handleRatings}/>
      <BottomRated handleRatingsBottom={handleRatingsBottom}/>
      <Alphabetical handleAlphabetical={handleAlphabetical}/>
      <AlphabeticalZtoA handleAlphabeticalZtoA={handleAlphabeticalZtoA}/>
      <TypeAnimation handleTypeAnimation={handleTypeAnimation}/>
      <TypeReality handleTypeReality={handleTypeReality}/>
      <TypeTalkshow handleTypeTalkshow={handleTypeTalkshow}/> 
    </div>
  );
}
