import React from 'react';
import { style } from "glamor";

import './NotFound.css';

function NotFoundContent(props) {

    const styles = style({
        backgroundColor: `${props.theme.accentBright}`,
        ":hover": {
            boxShadow: `0 5px 15px ${props.theme.accentBright}`,
        },
    });

    return (
        <div className='not-found'>
            <div className="not-found-main">
                <div className="not-found-text">
                    <h2>Page not Found</h2>
                    <p>
                        ALERT: Hydra is attacking our servers
                    </p>
                    <p>
                        MISSION CODE: 404 INITIATED
                    </p>
                </div>
                <div className="not-found-image">
                    <img src={require(`../../assests/images/404-captain-america.png`)} alt="" />
                </div>
            </div>

            <div className="go-back">
                <button {...styles} className="general-btn" onClick={() => { window.open(window.location.protocol + "//" + document.location.host.toString(), "_self"); }}>
                    Go Back
                </button>
            </div>
        </div>
    );
}

export default NotFoundContent;
