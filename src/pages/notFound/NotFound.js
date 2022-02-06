import React from 'react';

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { data404 } from '../../portfolio';

import './NotFound.css';

function NotFound(props) {
    return (
        <div className='not-found'>
            <Header theme={props.theme} setTheme={props.setTheme} />
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
                    <img src={require(`../../assests/images/${data404["image"]}`)} alt="" />
                </div>
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

export default NotFound;
