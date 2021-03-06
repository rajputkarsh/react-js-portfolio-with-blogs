import React from "react";
import Header from "../../components/header/Header";
import "./Experience.modules.css";
import { documentTitles, experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "../../backend"; 

function Experience(props) {

  document.title = documentTitles.experience;

  const app = initializeApp(firebaseConfig);
  getAnalytics(app);

  const theme = props.theme;
  return (
    <>
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="experience-main">
        <div className="experience-content">
          <div className="basic-experience">
            <Fade bottom duration={2000} distance="40px">
              <div className="experience-heading-div">
                <div className="experience-heading-img-div">
                  <ExperienceImg theme={theme} />
                </div>
                <div className="experience-heading-text-div">
                  <h1
                    className="experience-heading-text"
                    style={{ color: theme.text }}
                  >
                    {experience.title}
                  </h1>
                  <h3
                    className="experience-heading-sub-text"
                    style={{ color: theme.text }}
                  >
                    {experience["subtitle"]}
                  </h3>
                  <p
                    className="experience-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {experience["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>        
        </div>
      </div>
    </>

  );
}

export default Experience;
