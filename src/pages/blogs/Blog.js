import React, { useState } from "react";
import Header from "../../components/header/Header";
import { Fade } from "react-reveal";
import { useParams } from 'react-router-dom';
import "./Blog.modules.css";
import { documentTitles } from "../../portfolio.js";

import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp, doc, getDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "../../backend"; 
import { useEffect } from "react";

function Blogs(props) {

    const { blogSlug } = useParams();
    const theme = props.theme;

    document.title = documentTitles.blog + " | " + blogSlug;

    const app = initializeApp(firebaseConfig);
    const database = getFirestore();
    getAnalytics(app);

    const [blog, setBlog] = useState({});
    const [isBlogFetched, setBlogFetched] = useState(false);

    useEffect(
        () => {
            const blogRef      = doc(database, "blogs", blogSlug);
            const blogContent     = {};
            const blogSnapshot = getDoc(blogRef)
                .then((blogData) => {
                    blogContent[blogSlug] = blogData.data();
                    console.log(new Date(blogContent[blogSlug].dateUpdated.seconds*1000));
                    console.log((blogContent[blogSlug].dateUpdated.seconds));
                    setBlog(blogContent);
                    setBlogFetched(true);
                })

        }
    , [])


    return (
        <div className="blogs-main">
            <Header theme={theme} setTheme={props.setTheme} />
            <br />
            <div className="basic-blogs">
                <Fade bottom duration={2000} distance="40px">

                    {
                        isBlogFetched
                        ? (
                            <>
                                <div className="blogs-heading-div">
                                    <div className="blogs-heading-text-div">
                                            <h1>{blog[blogSlug].title}</h1>
                                    </div>
                                </div>
                                <div className="blogs-updated-date-div">
                                        <span>Updated On - {} </span>
                                </div>

                                <br />
                                    <div className="blog-text" dangerouslySetInnerHTML={{ __html: blog[blogSlug].content }}>

                                </div>
                            </>                            
                        )
                        : "Loading"
                    }

                </Fade>
            </div>
        </div>
    );
}

export default Blogs;
