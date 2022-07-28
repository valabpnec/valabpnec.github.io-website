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
                <a href="#publication" >Explore our research publications</a> 
            </div>
            <div className="va__whatva-container">
                <Feature title="Computer Vision" text="Computer vision is a field of Artificial Intelligence (AI) that trains computers to interpret and understand the visual world" />
                <Feature title="Natural Language Processing" text="It is the ability of computer program to interpret and understand human language as written and spoken" />
                <Feature title="Deep Learning" text="Branch of Artificial Intelligence (AI) function that emulates the workings of the human brain in processing data and creating patterns for use in decision-making" />
                <Feature title="Immersive Technologies" text="It is a combination of VR, AR, MR that creates a new reality. Provides great opportunities in the development of simulators of the major systems" />
                <Feature title="Digital Forensic Analysis" text="It is process of identifying, preserving, analyzing, and documenting digital evidence" />
                <Feature title="Internet of Things" text="It works with a network of physical objects which are embedded with sensors, software, and other technologies for the purpose of connecting and transferring data" />
                <Feature title="Cloud Computing" text="Cloud Computing is the delivery of different services through the Internet, including servers, data storage, databases, networking, software, analytics, and intelligence" />

            </div>
        </div>
    )
};

export default WhatVA;