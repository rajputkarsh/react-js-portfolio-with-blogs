import React, {useState} from "react";
import Header from "../../components/header/Header";

import { Fade } from "react-reveal";
import { addBlogHeader, documentTitles } from "../../portfolio.js";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button } from "react-bootstrap";
import { toast } from 'react-toastify';

import "./AddBlog.css";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "../../backend"; 

function AddBlog(props) {

    document.title = documentTitles.addBlog;

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    const theme = props.theme;

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
                                {addBlogHeader.title}
                            </h1>
                            <p
                                className="blog-add-header-detail-text subTitle"
                                style={{ color: theme.secondaryText }}
                            >
                                {addBlogHeader["description"]}
                            </p>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="repo-cards-div-main">
                <ReactQuill theme="snow" value={blogText} onChange={setBlogText} />
            </div>
            <br />
            <br />
            <Button className="button copyButton" variant="outline-dark" style={{color: theme.text}} onClick={() => { copyTextToClipboard() }}>Copy HTML</Button>
            <Button className="button showButton" variant="outline-dark" style={{color: theme.text}} onClick={() => { showText() }}>{isTextShowing ? "Hide" : "Show"} HTML</Button>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />


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
