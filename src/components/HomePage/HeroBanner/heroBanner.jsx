import React from "react";
import SwipeableTextMobileStepper from './carousel'; 
import './heroBanner.css';
import logo from "../../../assets/Logo.svg";
import {HashLink} from 'react-router-hash-link';

const HeroBanner = () => {
    return (
        <div className="heroBanner" id='heroBanner'>
            <div className="navbar">
                <img src={logo} alt="logo" className="heroBannerLogo"/>
                <div className="navBox">
                    <HashLink to="#heroBanner" smooth className="navItem">Home</HashLink>
                    <HashLink to="#about" smooth className="navItem">About</HashLink>
                    <HashLink to="#latest" smooth className="navItem">Latest</HashLink>
                    <HashLink to="#skills" smooth className="navItem">Skills</HashLink>
                    <HashLink to="#portfolio" smooth className="navItem">Portfolio</HashLink>
                    <HashLink to="#contact" smooth className="navItem">Contact</HashLink>
                </div>
            </div>
            <SwipeableTextMobileStepper/>
        </div>
    )
}

export default HeroBanner; 