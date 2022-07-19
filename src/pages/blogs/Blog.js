import React, { useState } from "react";
import Header from "../../components/header/Header";
import { Fade } from "react-reveal";
import { useParams } from 'react-router-dom';
import "./Blog.modules.css";
import { AVERAGE_WORDS_READ_PER_MINUTE, DEFAULT_AUTHOR, documentTitles } from "../../portfolio.js";

import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// import getAppIns
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
    const [readTime, setReadTime] = useState(0);

    const blogRef      = doc(database, "blogs", blogSlug);
    const blogContent  = {};

    useEffect(
        () => {

            getDoc(blogRef)
                .then( async (blogData) => {
                    await updateDoc( blogRef, {views : blogData.data().views ? blogData.data().views + 1 : 1} )
                    blogContent[blogSlug] = blogData.data();
                    setBlog(blogContent);
                    setBlogFetched(true);
                })

            let readingTime = getReadTime();
            setReadTime( `${Math.floor(readingTime)} mins ${(readingTime - Math.floor(readingTime))*60} seconds` )
        }
    , [])

    const handleLike = async () => {
        await updateDoc( blogRef, {likes : blogContent[blogSlug].data().likes ? blogContent[blogSlug].data().likes + 1 : 1} )
    }

    const getWordCount = (content) => {
        content = content.replace(/<[^>]*>/g," ");
        content = content.replace(/\s+/g, " ");
        content = content.trim();
        
        return content.split(" ").length        
    }

    const getReadTime = () => {
        return Math.round( (getWordCount(blog[blogSlug].content ) / AVERAGE_WORDS_READ_PER_MINUTE) * 100) / 100 ;
    }

    return (
        <>
            <Header theme={theme} setTheme={props.setTheme} />
            <div className="blogs-main">
            <br />
            <div className="basic-blogs">
                <Fade bottom duration={2000} distance="40px">

                    {
                        isBlogFetched
                        ? (
                            <>
                                <div className="blogs-heading-div">
                                    <div className="blogs-heading-text-div">
                                            <h1><strong>{blog[blogSlug].title}</strong></h1>
                                    </div>
                                </div>

                                <div className="blogs-information-div">
                                    <span> <b>Author - { blog[blogSlug]?.author?.name || DEFAULT_AUTHOR.name }</b> </span>
                                </div>
                                
                                <div className="blogs-information-div">
                                    <span><b>Updated On -</b> {new Intl.DateTimeFormat('en-IN', { dateStyle: 'full', timeStyle: 'long' }).format(new Date(blog[blogSlug].dateUpdated.seconds * 1000))} </span>
                                    <span> <b>Reading time -</b> { readTime } </span>
                                </div>

                                <div className="blog-text" dangerouslySetInnerHTML={{ __html: blog[blogSlug].content }}></div>
                            
                                <br />
                            
                                {/* <div className="blog-info">
                                    Total Views - { (Number(blog[blogSlug].views) ? Number(blog[blogSlug].views)  : 0) + 1 }
                                    Total Likes - 
                                    Comments    - 
                                </div> */}

                                {/* <button onClick={handleLike}> Like this Blog</button> */}

                            </>                            
                        )
                        : ""
                    }

                </Fade>
            </div>
        </div>            
        </>

    );
}

export default Blogs;
