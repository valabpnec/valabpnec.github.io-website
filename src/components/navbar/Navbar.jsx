import React from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/valab/valab_short_merged.png';
import './navbar.css';

const Navbar = () => {
    return(
        <div className="va__navbar">
            <div className="va__navbar-links">
                <div className="va__navbar-links_logo" >
                    <img src={logo} alt="Video Analytics Lab - PNEC" />
                </div>
                <div className="va__navbar-links_container" >
                    <p><a href="#home" >Home</a></p>
                    <p><a href="#whatVALAB" >What is Video Analytics Lab?</a></p>
                    <p><a href="#team" >Team</a></p>
                    <p><a href="#areas" >Research Areas</a></p>
                    <p><a href="#projects" >Projects</a></p>
                    <p><a href="#publication" >Publication</a></p>
                    <p><a href="#contact" >Contact</a></p>
                </div>
            </div>
        </div>
    )
};

export default Navbar;