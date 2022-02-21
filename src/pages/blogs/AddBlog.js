import React, {useState} from "react";
import Header from "../../components/header/Header";

import { Fade } from "react-reveal";
import { documentTitles } from "../../portfolio.js";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button } from "react-bootstrap";

import { toast } from 'react-toastify';

import "./AddBlog.modules.css";

import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp, doc, setDoc, collection, getDocs } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "../../backend"; 

function AddBlog(props) {

    const theme = props.theme;

    document.title = documentTitles.addBlog;

    const app = initializeApp(firebaseConfig);
    const database = getFirestore();
    getAnalytics(app);

    const [blogTitle, setBlogTitle] = useState("");

    const [blogDescription, setBlogDescription] = useState("");

    const [blogSlug, setBlogSlug] = useState("");

    const [blogText, setBlogText] = useState("");
    const [isTextShowing, setIsTextShowing] = useState(false);

    const showToast = (text) => {
        if (theme.name === "light") {
            toast(text);
        }
        else{
            toast.dark(text);
        }
    }

    const handleTitleChange = (newBlogTitle) => {

        let newBlogSlug = newBlogTitle.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

        setBlogTitle(newBlogTitle);
        setBlogSlug(newBlogSlug);
    }

    const isBlogValid = () => {
        if (blogTitle === "" || blogTitle === null || blogTitle === undefined) {
            showToast("Please enter Blog Title");
            return false;
        }

        if (blogSlug === "" || blogSlug === null || blogSlug === undefined) {
            showToast("Please enter Blog Slug");
            return false;
        }

        if (blogDescription === "" || blogDescription === null || blogDescription === undefined) {
            showToast("Please enter Blog Description");
            return false;
        }

        if (blogText === "" || blogText === null || blogText === undefined) {
            showToast("Please enter Blog Text");
            return false;
        }

        return true;
    }

    const isSlugValid = () => {
        

        const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/g;

        if (slugRegex.test(blogSlug) === false){
            showToast("Invalid Blog Slug");
            return false;
        }
            
        const blogs = collection(database, "blogs");
        let blogSnapshot = getDocs(blogs);

        blogSnapshot.then((snapshot) => {
            snapshot.forEach((doc) => {
                if (doc.id === blogSlug){
                    return false;
                }
            })
        })

        return true;
    }

    const publishBlog = () => {
        
        if (isBlogValid() && isSlugValid()) {
            showToast("Please wait...");
            try{
                const docRef = doc(database, "blogs", blogSlug);

                setDoc(docRef, {
                    title       : blogTitle,
                    description : blogDescription,
                    content     : blogText,
                    status      : true,
                    dateAdded   : Timestamp.fromDate(new Date()),
                    dateUpdated : Timestamp.fromDate(new Date())
                })

                setBlogTitle("");
                setBlogSlug("");
                setBlogText("");
                setBlogDescription("");

                showToast("Blog Published");
            }
            catch(e){
                showToast("Something went wrong");
                console.log(e);
            }

        }

    }

    const copyTextToClipboard = () => {
        navigator.clipboard.writeText(blogText);
        if (theme.name === "light") {
            toast("Text Copied!");
        }
        else {
            toast.dark("Text Copied!");
        }
    }

    const showText = () => {
        setIsTextShowing(!isTextShowing);
    }

    return (
        <div className="blog-add-main">
            <Header theme={theme} setTheme={props.setTheme} />
            <div className="basic-blog-add">
                <Fade bottom duration={2000} distance="40px">
                    <div className="blog-add-heading-div">
                        <div className="blog-add-heading-text-div">
                            <h1
                                className="blog-add-heading-text"
                                style={{ color: theme.text }}
                            >
                                Add a blog to the website
                            </h1>
                            <p
                                className="blog-add-header-detail-text subTitle"
                                style={{ color: theme.secondaryText }}
                            >
                                Use the below given editor to write the blog
                            </p>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="add-blog-details">
                <Form className="add-blog-form">
                    <Form.Group  controlId="formGroupBlogTitle">
                        <Form.Label className="left-padded">Blog Title</Form.Label>
                        <Form.Control type="text" value={blogTitle} onChange={(e) => {handleTitleChange(e.target.value)}} placeholder="Blog Title" />
                    </Form.Group>
                    <Form.Group controlId="formGroupBlogSlug">
                        <Form.Label className="left-padded">Blog Slug</Form.Label>
                        <Form.Control type="text" value={blogSlug} onChange={(e) => { setBlogSlug(e.target.value) }} placeholder="Blog Slug" />
                    </Form.Group>
                    <Form.Group controlId="formGroupBlogDescription">
                        <Form.Label className="left-padded">Blog Description</Form.Label>
                        <Form.Control type="text" value={blogDescription} onChange={(e) => { setBlogDescription(e.target.value) }} placeholder="Blog Description" />
                    </Form.Group>
                </Form>
            </div>
            <div className="repo-cards-div-main">
                <ReactQuill theme="snow" value={blogText} onChange={setBlogText} />
            </div>
            
            <div className="add-blog-buttons">
                <Button type="button" className="button copyButton" variant="outline-dark" style={{ color: theme.text }} onClick={() => { copyTextToClipboard() }}>Copy HTML</Button>
                <Button type="button" className="button showButton" variant="outline-dark" style={{ color: theme.text }} onClick={() => { showText() }}>{isTextShowing ? "Hide" : "Show"} HTML</Button>
                <Button type="button" className="button publishButton" variant="outline-dark" style={{ color: theme.text }} onClick={() => { publishBlog() }}>Publish Blog</Button>
            </div>



            {
                isTextShowing ? (
                    <div className="generatedHTML">{blogText}</div>
                ):
                (
                    ""
                )
            }
        </div>
    );
}

export default AddBlog;
