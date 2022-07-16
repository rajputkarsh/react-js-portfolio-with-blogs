import React from "react";
import "./Greeting.modules.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import Typewriter from 'typewriter-effect';

export default function Greeting(props) {
  const theme = props.theme;
  
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">
                const name= <span className="colored-text">U</span>
                <Typewriter
                  options={{
                    strings: [greeting.full_name.substring(1)+";"],
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
              <div className="social-media-wrapper">
                <SocialMedia />
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
