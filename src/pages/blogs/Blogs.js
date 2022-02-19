import React from "react";
import Header from "../../components/header/Header";
import { Fade } from "react-reveal";
import "./Blogs.css";
import BlogCard from "../../components/BlogCard/BlogCard";
import { blogsHeader, blogs, documentTitles } from "../../portfolio.js";
import { style } from "glamor";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "../../backend"; 

function Blogs(props) {

    document.title = documentTitles.blogs;

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    const theme = props.theme;

    const styles = style({
        backgroundColor: `${theme.accentBright}`,
        ":hover": {
            boxShadow: `0 5px 15px ${theme.accentBright}`,
        },
    });

    return (
        <div className="blogs-main">
            <Header theme={theme} setTheme={props.setTheme} />
            <div className="basic-blogs">
                <Fade bottom duration={2000} distance="40px">
                    <div className="blogs-heading-div">
                        <div className="blogs-heading-text-div">
                            <h1
                                className="blogs-heading-text"
                                style={{ color: theme.text }}
                            >
                                {blogsHeader.title}
                            </h1>
                            <p
                                className="blogs-header-detail-text subTitle"
                                style={{ color: theme.secondaryText }}
                            >
                                {blogsHeader["description"]}
                            </p>
                            <button {...styles} className="general-btn" onClick={() => { window.open(blogsHeader.link, "_blank") }}>
                                My LinkedIn Profile
                            </button>                            
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="repo-cards-div-main">

                {
                    Object.keys(blogs.data).map( (key) => {
                        return <BlogCard key={blogs.data[key].index} blog={blogs.data[key]} url={key} theme={theme} />;
                    })
                }
            </div>

        </div>
    );
}

export default Blogs;
