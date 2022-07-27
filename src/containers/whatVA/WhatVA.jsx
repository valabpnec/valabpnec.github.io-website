import React from "react";
import Feature from "../../components/feature/Feature";
import './whatVA.css';

const WhatVA = () => {
    return(
        <div className="va__whatva section__margin" id="wva">
            <div className="va__whatva-feature">
                <Feature title="What is Video Analytics Lab?" text="Video Analytics (VA) Lab aka Video Surveillance Lab at PNEC-NUST established in August 2016 is focusing on providing indigenous and state-of-the-art Artificial Intelligence (AI) and Augmented Reality - Virtual Reality (AR-VR) based solutions. VA Lab is also a partner lab of National Center of Big Data and Cloud Computing (NCBC). The lab is headed by Dr. Rana Hammad Raza." />
            </div>
            <div className="va__whatva-heading">
                <h1 className="gradient__text" >Actively developing solutions in emerging technology areas</h1>
                <p>Explore more research areas</p>
            </div>
            <div className="va__whatva-container">
                {/* TODO Feature */}
            </div>
        </div>
    )
};

export default WhatVA;