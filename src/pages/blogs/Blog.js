import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import { useParams } from 'react-router-dom';
import "./Blog.css";
import {  blogs, documentTitles } from "../../portfolio.js";
import { style } from "glamor";

function Blogs(props) {

    const { blogSlug } = useParams();
    const theme = props.theme;

    document.title = documentTitles.blog + " | "+blogSlug;

    const styles = style({
        backgroundColor: `${theme.accentBright}`,
        ":hover": {
            boxShadow: `0 5px 15px ${theme.accentBright}`,
        },
    });



    return (
        <div className="blogs-main">
            <Header theme={theme} setTheme={props.setTheme} />
            <br />
            <div className="basic-blogs">
                <Fade bottom duration={2000} distance="40px">
                    <div className="blogs-heading-div">
                        <div className="blogs-heading-text-div">
                            <h1>{ blogs.data[blogSlug].name }</h1>
                        </div>
                    </div>

                    <br />
                    <div className="blog-text" dangerouslySetInnerHTML={{ __html: blogs.data[blogSlug].content}}>

                    </div>

                </Fade>
            </div>
            <br />
            <br />
            <br />

            <br />
            <br />
            <Footer theme={props.theme} onToggle={props.onToggle} />
        </div>
    );
}

export default Blogs;
