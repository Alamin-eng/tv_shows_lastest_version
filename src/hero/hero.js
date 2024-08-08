import "./hero.css";
import { useEffect, useState } from "react";

export default function Hero() {
  const images = [
    'https://miro.medium.com/v2/resize:fit:1400/0*8muPGnvovN4Vruht',
    '#141414',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvFSSem2Z-fiOo0Xhb34ZJ9khasdBXWx1Kw0mVMnLByKBY5QahUiGA_zzQhuIuvR1hFo&usqp=CAU',
    '#141414',
    'https://play-lh.googleusercontent.com/8BkSt5nli4uDN_RGGB-7x2mQR8zMimPXr3-q47xMYpP1m4646LmW77IciYAbUFO4c7cx',
  
  ];
  const [counter, setCounter] = useState(0);
  const [backwardCounter, setBackwardCounter] = useState(10)
  // photo index counter
  useEffect(()=>{
    const timeout = setTimeout(() => {
      setCounter( counter + 1);
    }, 2000);
    return (()=>{
      counter >= images.length ? setCounter(0) : clearTimeout(timeout)
    })
  },[counter, images.length])
  // Backward counter
  useEffect(()=>{
    const backtimeout = setTimeout(() => {
      setBackwardCounter( backwardCounter - 1);
    }, 1000);
    return (()=>{
     backwardCounter <= 1 ? setBackwardCounter("") : clearTimeout(backtimeout)
    })
  },[backwardCounter])
  
  return (
    <div className="hero" style={{  backgroundImage:`url(${images[counter]})` }}>
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





