import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import { Fade } from "react-reveal";
import "./Blogs.modules.css";
import BlogCard from "../../components/BlogCard/BlogCard";
import { blogsHeader, documentTitles } from "../../portfolio.js";
import { style } from "glamor";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "../../backend"; 

function Blogs(props) {

    document.title = documentTitles.blogs;

    const app = initializeApp(firebaseConfig);
    const database = getFirestore();
    getAnalytics(app);

    const theme = props.theme;

    const styles = style({
        backgroundColor: `${theme.accentBright}`,
        ":hover": {
            boxShadow: `0 5px 15px ${theme.accentBright}`,
        },
    });

    const [blogList, setBlogList] = useState([]);

    useEffect(() => {
        const blogs = collection(database, "blogs");
        let blogSnapshot = getDocs(blogs);
        let allBlogs = [];
        blogSnapshot.then((snapshot) => {
            snapshot.forEach((doc) => {
                if(doc.data().status === true){
                    allBlogs.push({
                        slug: doc.id,
                        title: doc.data().title,
                        description: doc.data().description
                    })
                }
            })
            setBlogList(allBlogs);
        })        
    }, []);

    return (
        <>
            <Header theme={theme} setTheme={props.setTheme} />
            <div className="blogs-main">
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
                        blogList.length > 0 
                        ?
                            blogList.map( 
                                (blog) => (
                                    <BlogCard key={blog.slug} blog={blog} theme={theme} />
                                )
                            )
                        : 
                        ""
                    }
                </div>
            </div>            
        </>
    );
}

export default Blogs;
