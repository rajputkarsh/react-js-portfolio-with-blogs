import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";
import FeelingProud from "./FeelingProud";
import { style } from "glamor";
import Typewriter from 'typewriter-effect';

export default function Greeting(props) {
  const theme = props.theme;
  const history = useNavigate();

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">
                {greeting.title}&nbsp;I'm&nbsp;
                <Typewriter
                  options={{
                    strings: [greeting.full_name],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <div
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >                
                <ul type="none">
                  {
                    greeting.subTitle.map(
                      (subTitleText, index) => {
                        return <li key={index}>{subTitleText}</li>;
                      }
                    )
                  }
                </ul>
              </div>
              <SocialMedia />
              <div className="portfolio-repo-btn-div">
                <button
                  {...styles}
                  className="button"
                  onClick={() => {
                    window.open("/contact", "_self");
                  }}
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
