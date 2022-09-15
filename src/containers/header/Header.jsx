import React from "react";
import va from "../../assets/valab/ai8.gif";
// import ai from "../../assets/gpt3/ai.png";
import './header.css';

const Header = () => {
    return(
        <div className="va__header section__padding " id="home">
            <div className="va__header-content">
                <h1 className="gradient__text">Transforming Data. Advancing Vision. Providing Immersion.</h1>
                <p>We aspire to develop intelligent algorithms that perform important visual perception tasks and support in development of immersive technology based solutions.</p>

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
                <img src={va} ></img>
            </div>
            
        </div>
    )
};

export default Header;