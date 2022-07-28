import React from "react";
import Feature  from "../../components/feature/Feature";
import './features.css';

const featuresData = [
    {
        title: 'Vision-based Fire Detection',
        text: 'Vision-based fire detection system can detect smoke or flame at an earlier stage to save lives and assets'
    },
    {
        title: 'Attribute-based Search',
        text: 'Complex tasks such as identification of a particular face in hours long multiple camera feeds can be effectively undertaken using autonomous attribute-based search'
    },
    {
        title: 'Traffic Anomalies Detection',
        text: 'This includes identification of various traffic anomalies such as signal violations, lane negligence, going wrong-way etc.'
    },
    {
        title: 'Vision-based Super-Resolution',
        text: 'Low resolution feeds based on certain requirement can be super resolved using state of the art algorithms'
    },
    {
        title: 'Attendance Management System',
        text: 'Face detection and recognition in real time can be used to mark the attendance of students and employees in near or medium field of the camera view'
    },
    {
        title: 'Video Summary',
        text: 'Video digest can be generated to list major daily events and avoid cumbersome manual process'
    },
    {
        title: 'Virtual Orientation of Campus',
        text: 'This service will provide virtual tours or walkarounds of Campus/Vessels using VR simulation technology in a 360-degree panoramic display'
    },
    {
        title: 'Session-based Training',
        text: 'VR session-based training can be used for Damage Control and Firefighting training etc'
    },
    {
        title: 'Simulation-based Training for Operators',
        text: 'This service includes operators training on specialized equipment in VR according to the underlying requirements'
    },
    {
        title: 'Maintenance Support',
        text: 'This service can be used to train personnel in the virtual environment to familiarize them with what tools to use for specific scenarios'
    },
    {
        title: 'Design Review',
        text: 'This service provides an essential aid to avoid any unforeseen design flaws (such as structural deficiencies of a building/ equipment) later in the construction stage'
    },
    {
        title: 'Miscellaneous',
        text: 'VR technology can also be used for training personnel for various medical situations such as CPR etc. Moreover, VR-based psychological therapy is also being effectively utilized'
    },
]

const Features = () => {
    return(
        <div className="va__features section__padding" id="features">
            <div className="va__features-heading">
                <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
                <a href="#contact">Contact Early to Employ our State-of-the-Art Services</a>
            </div>
            <div className="va__features-container">
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index}/>
                ))}
            </div>
        </div>
    )
};

export default Features;