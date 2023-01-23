import React from "react";
import va from "../../assets/valab/ai6.gif";
import './header.css';

const Header = () => {
    return(
        <div className="va__header section__padding " id="home">
            <div className="va__header-content">
                <h1 className="gradient__text">Transforming Data. Advancing Vision. Providing Immersion.</h1>
                <p>We aspire to develop intelligent algorithms that perform important visual perception tasks and support in development of immersive technology based solutions</p>

            </div>

            <div className="va__header-image" >
                <img src={va} ></img>
            </div>
            
        </div>
    )
};

export default Header;