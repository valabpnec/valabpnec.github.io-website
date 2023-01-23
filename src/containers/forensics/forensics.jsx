import React from "react";
import Feature from "../../components/feature/Feature";
import './forensics.css';

const forensics = () => {
    return(
        <div className="va__whatva section__margin" id="forensics">
            <div className="va__whatva-feature" id="whatVALAB">
                <Feature title="Video Forensic Analysis" text="Forensic video analysis is the scientific examination, comparison and/or evaluation of video in legal matters" />
            </div>
            <div className="va__whatva-heading">
                <h1 className="gradient__text" >Three Phases of Video Forensic Analysis</h1>
                <a href="https://projects.pnec.nust.edu.pk/va/projects.html" >Explore our video forensic projects</a> 
            </div>
            <div className="va__whatva-container" >
                <Feature title="Pre-processing" text="Intake of the evidence, copies and converts media, performs preliminary enhancements and other assessments" />
                <Feature title="Data Accumulation" text="Includes all the pre-processing skills, performs image comparison investigations, aspect ratio calibration, color correction, reverse projection, photogammetry, authentication, motion tracking, image authentication" />
                <Feature title="Report Generation" text="Includes all pre-processing and analyst skills, provides consultation with litigators, generates formalized reports, peer/technical review, formulating opinions, evidence recovery" />

            </div>
            
        </div>
    )
};

export default forensics;