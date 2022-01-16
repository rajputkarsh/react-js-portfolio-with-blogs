import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import BlogsImg from "./BlogsImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData, documentTitles } from "../../portfolio.js";
import { style } from "glamor";
import { Button } from "react-bootstrap";

import { toast } from 'react-toastify';


const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

function Contact(props) {

  document.title = documentTitles.contact;

  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  const openResume = (url) => {
    if(url == "" || url == undefined || url == null){
      if(theme.name == "light"){
        toast("Oops ! This action is not available");
      }
      else {
        toast.dark("Oops ! This action is not available");
      }
    }
    else{
      window.open(url, "_blank");
    }
  };

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                className="profile-pic"
                src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                alt=""
              />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia />
              <br />
              <br />
              <button {...styles} className="general-btn" onClick={() => { openResume(greeting.resumeLink)}}>
                See my Resume
              </button>
            </div>
          </div>
        </Fade>
        <Fade bottom duration={1000} distance="40px">
          <div className="blog-heading-div">
            <div className="blog-heading-text-div">
              <h1 className="blog-heading-text" style={{ color: theme.text }}>
                {blogSection["title"]}
              </h1>
              <p
                className="blog-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {blogSection["subtitle"]}
              </p>

              <Button className="button copyButton" variant="outline-dark" onClick={() => { window.open("/blogs", "_blank") }} style={{ color: theme.text }} >Blogs</Button>
              <Button className="button showButton" variant="outline-dark" onClick={() => { window.open(blogSection.link, "_blank") }} style={{ color: theme.text }} >Linkedin Profile</Button>

            </div>
            <div className="blog-heading-img-div">
              <BlogsImg theme={theme} />
            </div>
          </div>
        </Fade>
      </div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Contact;
