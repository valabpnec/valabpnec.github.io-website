import React from "react";
import { vr, ai, dl, iot, cloud, forensic, nlp } from './import';
import './brand.css';

const Brand = () => {
    return(
        <div>
            {/* <div className="va__heading">
                    <h1 >Services</h1>
            </div> */}
            <div className="va__brand section__padding">
                
                <div>
                    <img src={ai} alt="Artificial Intelligence (AI)"/>
                </div>
                <div>
                    <img src={dl} alt="Deep learning"/>
                </div>
                <div>
                    <img src={nlp} alt="Natural Language Processing"/>
                </div>
                <div>
                    <img src={vr} alt="Augmented Reality - Virtual Reality"/>
                </div>                
                <div>
                    <img src={cloud} alt="Cloud Computing"/>
                </div>
                <div>
                    <img src={iot} alt="Internet of Things"/>
                </div>
                <div>
                    <img src={forensic} alt="Digitial Computer Analysis and Forensics"/>
                </div>
            </div>
        </div>
    )
};

export default Brand;