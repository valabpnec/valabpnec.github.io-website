import React from "react";
import valogo from '../../assets/valab/LOGOCollageFaded_1.png';
import './footer.css';

const Footer = () => {
    return(
        <div className="va__footer section__padding" id="contact">
            <div className="va__footer-heading">
            <h1 className="gradient__text">Do you want to step in to the future before others</h1>
            </div>

            <div className="va__footer-btn">
            <a href="#">Contact for our State-of-the-Art Services</a>
            </div>

            <div className="va__footer-links">
            <div className="va__footer-links_logo">
                <img src={valogo} alt="va_logo" />
                <h4>Video Analytics Lab</h4>
                <p>@2022 Video Analytics Lab. All rights reserved.</p>
                
            </div>
            <div className="va__footer-links_div">
                <h4>Sitemap</h4>
                <p><a href="#home" >Home</a></p>
                <p><a href="#whatVALAB" >What is Video Analytics Lab?</a></p>
                <p><a href="#researchareas" >Research Areas</a></p>
                <p><a href="#projects" >Projects</a></p>
                <p><a href="#team" >Team</a></p>
                <p><a href="#publication" >Publication</a></p>
                <p><a href="#blog" >Blog</a></p>
                <p><a href="#contact" >Contact</a></p>
            </div>
            <div className="va__footer-links_div">
                <h4>Links</h4>
                <a href="https://projects.pnec.nust.edu.pk/VA/">VA Lab PNEC</a>
                <a href="https://github.com/valabpnec">Github</a>
                <a href="https://www.linkedin.com/company/video-analytics-lab-ai">LinkedIn</a>
            </div>
            
            <div className="va__footer-links_div">
                <h4>Get in touch</h4>
                <address>Pakistan Navy Engineering College (PNEC)
                    National University of Sciences and Technology (NUST)
                    <br /> Karachi, Pakistan</address>
                <br/>
                <abbr title="Email Address">
                    <strong>Email:</strong>
                    &nbsp;val@pnec.nust.edu.pk
                </abbr>
            </div>
            </div>

           
        </div>
    )
};

export default Footer;