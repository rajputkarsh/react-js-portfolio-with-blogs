import React from "react";
import "./DegreeCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

function DegreeCard(props) {
  const degree = props.degree;
  const theme = props.theme;


  const card_body = style({
    borderBottom: `1px solid ${theme.accentColor}`,
    borderLeft: `1px solid ${theme.accentColor}`,
    borderRight: `1px solid ${theme.accentColor}`,
    borderRadius: "7px",
    width: "90%",
    margin: "10px",
    boxShadow: `0px 1px 5px ${theme.accentColor}`,
    transition: "all 0.2s ease-in-out",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 5px 15px ${theme.accentColor}`,
    },
    "@media (max-width: 768px)": {
      width: "100%",
    },
  });

  const button_visit = style({
    textDecoration: "none",
    color: "rgba(255, 255, 255, 1)",
    background: `${theme.accentColor}`,
    padding: "15px 15px",
    marginTop: "25px",
    borderRadius: "4px",
    borderWidth: "0px",
    marginBottom: "20px",
    width: "200px",
    height: "50px",
    fontWeight: "bold",
    fontFamily: "Google Sans Regular",
    fontSize: "17px",
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 5px 10px ${theme.accentColor}`,
    },
  });

  return (
    <div className="degree-card">
      
      <Fade right duration={2000} distance="40px">
        <div {...card_body}>
          <div
            className="body-header"
            style={{ backgroundColor: "#6C63FF" }}
          >
            <div className="body-header-title">
              <h2 className="card-title" style={{ color: "#FFFFFF" }}>
                {degree.title}
              </h2>
              <h3 className="card-subtitle" style={{ color: "#FFFFFF" }}>
                {degree.subtitle}
              </h3>
            </div>
            <div className="body-header-duration">
              <h3 className="duration" style={{ color: "#FFFFFF" }}>
                {degree.duration}
              </h3>
            </div>
          </div>
          <div className="body-content">
            {degree.descriptions.map((sentence, index) => {
              return (
                <p className="content-list" key={index} style={{ color: theme.text }}>
                  {sentence}
                </p>
              );
            })}
            <a
              href={degree.website_link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", textAlign: "center" }}
            >
              <p
                {...button_visit}
                style={{
                  marginRight: "23px",
                  textDecoration: "none",
                  float: "right",
                  backgroundColor: theme.accentColor,
                }}
              >
                Visit Website
              </p>
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default DegreeCard;
