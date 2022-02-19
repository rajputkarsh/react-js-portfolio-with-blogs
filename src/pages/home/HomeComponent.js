import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import { documentTitles } from "../../portfolio";

function Home(props) {

  document.title = documentTitles.home;

  return (
    <div>
      <div className="home-content">
        <Header theme={props.theme} setTheme={props.setTheme} />
        <Greeting theme={props.theme} />
        <Skills theme={props.theme} />        
      </div>
      <Footer theme={props.theme} />
    </div>
  );
}

export default Home;
