import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/valab/valab_short_merged.png';
import './navbar.css';

const Menu = () => (
    <>
        <p><a href="#home" >Home</a></p>
        <p><a href="#whatVALAB" >What is Video Analytics Lab?</a></p>
        <p><a href="#team" >Team</a></p>
        <p><a href="#areas" >Research Areas</a></p>
        <p><a href="#projects" >Projects</a></p>
        <p><a href="#publication" >Publication</a></p>
        <p><a href="#blog" >Blog</a></p>
        <p><a href="#contact" >Contact</a></p>
    </>
)

const Navbar = () => {

    const [toggleMenu, setToggleMenu ]  = useState(false);

    return(
        <div className="va__navbar">
            <div className="va__navbar-links">
                <div className="va__navbar-links_logo" >
                    <img src={logo} alt="Video Analytics Lab - PNEC" />
                </div>
                <div className="va__navbar-links_container" >
                    <Menu/>
                </div>
            </div>
            {/* <div className="va__navbar-sign">
                <p>Sign In</p>
                <button type="button" >Sign Up</button>
            </div> */}

            <div className="va__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={()=> setToggleMenu(false)}  />
                    : <RiMenu3Line color="#fff" size={27} onClick={()=> setToggleMenu(true)}  />
                }

                {toggleMenu && (
                    <div className="va__navbar-menu_container scale-up-center">
                        <div className="va__navbar-menu_container-links">
                            <Menu/>
                        </div>
                    </div>
                )}
            </div>


        </div>
    )
};

export default Navbar;