import React, { useState } from "react";
import "./Splash.css";
import { documentTitles } from "../../portfolio";

function AnimatedSplash(props) {

  document.title = documentTitles.splash;

  return (
    <div className="logo_wrapper">
      <div className="loading">
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
      </div>
    </div>
  );
}

function Splash(props) {
  const [redirect, setRedirect] = useState(false);
  setTimeout(() => setRedirect(true), 1000);

  if (redirect){
    window.location = "/home";
  }

  return (<AnimatedSplash theme={props.theme} />)
    
}

export default Splash;
