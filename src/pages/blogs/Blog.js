import React from "react";
import Header from "../../components/header/Header";
import { Fade } from "react-reveal";
import { useParams } from 'react-router-dom';
import "./Blog.css";
import {  blogs, documentTitles } from "../../portfolio.js";

function Blogs(props) {

    const { blogSlug } = useParams();
    const theme = props.theme;

    document.title = documentTitles.blog + " | "+blogSlug;

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
        </div>
    );
}

export default Blogs;
