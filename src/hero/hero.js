import "./hero.css";
import { useEffect, useState } from "react";
import { GooglePlayButton, AppStoreButton } from "react-mobile-app-button";

export default function Hero() {
  const APKUrl = "https://play.google.com/store/apps/details?id=host";
  const IOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";
  const [counter, setCounter] = useState(0);
  const [backwardCounter, setBackwardCounter] = useState(10);
  // photo index counter(not in use at the moment)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCounter(counter + 1);
    }, 2500);
    return () => {
      clearTimeout(timeout);
    };
  }, [counter]);
  // Backward counter (not in use at the moment)
  useEffect(() => {
    const backtimeout = setTimeout(() => {
      setBackwardCounter(backwardCounter - 1);
    }, 1000);
    return () => {
      backwardCounter <= 1 ? setBackwardCounter("") : clearTimeout(backtimeout);
    };
  }, [backwardCounter]);

  return (
    <div className="hero fade">
      <div className="hero-texts">
        <div>
          <h1> CLASSIC TV SHOWS </h1>
          
        </div>
        <div className="hero-description">
          TV shows guide and information about your favourite classic shows.
          Thanks to TV MUSE for the generous support of your public API.
        </div>
        <button className="button"> GET STARTED </button>
        <div>
          Have a account?{" "}
          <button className="account-link">
            Log in
          </button>{" "}
        </div>
        <div className="app-store">
          <GooglePlayButton
            url={APKUrl}
            theme={"dark"}
            className={"custom-style"}
          />
          <AppStoreButton
            url={IOSUrl}
            theme={"dark"}
            className={"custom-style"}
          />
        </div>
      </div>
    </div>
  );
}

//<span className="countdown">{backwardCounter}</span>

// <div>
// SHOWS STARTING IN <span className="countdown">{backwardCounter}</span>
// </div>
