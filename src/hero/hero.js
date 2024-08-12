import "./hero.css";
import { useEffect, useState } from "react";

export default function Hero() {
  
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
  // Backward counter
  useEffect(() => {
    const backtimeout = setTimeout(() => {
      setBackwardCounter(backwardCounter - 1);
    }, 1000);
    return () => {
      backwardCounter <= 1 ? setBackwardCounter("") : clearTimeout(backtimeout);
    };
  }, [backwardCounter]);

  return (
    <div
      className="hero fade"
      
    >
      <p>Download TV shows images and Fade background image transitions</p>
      <div>
        <h1>SHOWS STARTING IN {backwardCounter}</h1>
      </div>
      <div> Enjoy your favourite classic TV shows full informtion here </div>
      <div className="hero-description">
        TV shows guide and information about your favourite classic shows.
        Thanks to TV MUSE for the generous support of your public API.
      </div>
      <div> Get started Button here</div>
      <div>Have a account? Log in </div>
      <div>Google play and App store buttons</div>
    </div>
  );
}
