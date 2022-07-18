import React from "react";
import Header from "../../components/header/Header";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Fade } from "react-reveal";
import { projectsHeader, projects, documentTitles } from "../../portfolio.js";
import "./Projects.modules.css";
import ProjectsImg from "./ProjectsImg";
import { style } from "glamor";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "../../backend"; 


function Projects(props) {

  document.title = documentTitles.projects;
  
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);

  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <>
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="projects-main">
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {projects.data.map((repo, index) => {
            return <ProjectCard key={index} repo={repo} theme={theme} />;
          })}
        </div>
        <br />
        <br />
        <br />
        <a
          {...styles}
          className="general-btn"
          href="https://github.com/rajputkarsh"
        >
          More Projects (Github)
        </a>
      </div>      
    </>
  );
}

export default Projects;
