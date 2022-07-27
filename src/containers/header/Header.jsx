import React from "react";
import va from "../../assets/valab/va_new.gif";
import ai from "../../assets/gpt3/ai.png";
import './header.css';

const Header = () => {
    return(
        <div className="va__header section__padding " id="home">
            <div className="va__header-content">
                <h1 className="gradient__text">Transforming Data. Advancing Vision. Providing Immersion.</h1>
                <p>Video Analytics (VA) Lab aka Video Surveillance Lab at PNEC-NUST established in August 2016
                 is focusing on providing indigenous and state-of-the-art Computer Vision- and Artificial Intelligence
                 (AI)-based automated video content analysis solutions.</p>

                {/* <div className="va__header-content__input" >
                    <input type="email" placeholder="Your email address" ></input>
                    <button type="button" >Get Started</button>
                </div> 

                <div className="va__header-content__people" >
                    <img src={people} ></img>
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>*/}
            </div>

            <div className="va__header-image" >
                <img src={ai} ></img>
            </div>
            
        </div>
    )
};

export default Header;