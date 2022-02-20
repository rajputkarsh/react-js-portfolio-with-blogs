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
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "../../backend"; 

function AddBlog(props) {

    document.title = documentTitles.addBlog;

    const app = initializeApp(firebaseConfig);
    getAnalytics(app);

    const theme = props.theme;

    const [blogTitle, setBlogTitle] = useState("");

    const [blogSlug, setBlogSlug] = useState("");

    const [blogText, setBlogText] = useState('');
    const [isTextShowing, setIsTextShowing] = useState(false);

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
                        <Form.Control type="text" value={blogTitle} onChange={(e) => {setBlogTitle(e.target.value)}} placeholder="Blog Title" />
                    </Form.Group>
                    <Form.Group controlId="formGroupBlogSlug">
                        <Form.Label className="left-padded">Blog Slug</Form.Label>
                        <Form.Control type="text" value={blogSlug}  onChange={(e) => {setBlogSlug(e.target.value)}}  placeholder="Blog Slug" />
                    </Form.Group>
                </Form>
            </div>
            <div className="repo-cards-div-main">
                <ReactQuill theme="snow" value={blogText} onChange={setBlogText} />
            </div>
            
            <div className="add-blog-buttons">
                <Button className="button copyButton" variant="outline-dark" style={{ color: theme.text }} onClick={() => { copyTextToClipboard() }}>Copy HTML</Button>
                <Button className="button showButton" variant="outline-dark" style={{ color: theme.text }} onClick={() => { showText() }}>{isTextShowing ? "Hide" : "Show"} HTML</Button>
                <Button className="button publishButton" variant="outline-dark" style={{ color: theme.text }} onClick={() => { }}>Publish Blog</Button>
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
