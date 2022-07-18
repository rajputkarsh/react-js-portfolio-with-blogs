import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import { documentTitles } from "../../portfolio";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "../../backend";

import "./HomeComponent.modules.css"

function Home(props) {

  document.title = documentTitles.home;

  const app = initializeApp(firebaseConfig);
  getAnalytics(app);

  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="home-content">
        <Greeting theme={props.theme} />
        <Skills theme={props.theme} />        
      </div>
    </div>
  );
}

export default Home;
