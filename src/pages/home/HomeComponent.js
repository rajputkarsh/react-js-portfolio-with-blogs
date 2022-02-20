import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import { documentTitles } from "../../portfolio";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "../../backend";

function Home(props) {

  document.title = documentTitles.home;

  const app = initializeApp(firebaseConfig);
  getAnalytics(app);

  return (
    <div>
      <div className="home-content">
        <Header theme={props.theme} setTheme={props.setTheme} />
        <Greeting theme={props.theme} />
        <Skills theme={props.theme} />        
      </div>
    </div>
  );
}

export default Home;
