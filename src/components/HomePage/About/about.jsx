import React from "react";
import './about.css';
import bg1 from '../../../assets/selfie.jpg';


const About = () => {
    return (
        <div className="about" id='about'>
            <div className="text">
                <div className="aboutTitle">About Me</div>
                <div className="content">I'm Dana, a student at UofT for Computer Science (Software Engineering Stream). My passions including coding (obviously), music, and games.<br/><br/>My most recent obsession has been shawarma after trying it for the first time last year. If we share any common interests, send me a message!</div>  
                <a href="Dana_Wan_Resume_developer.pdf" className="btnResume" download>
                    <span className="resumeTxt">Resume</span>
                </a>
            </div>
            <img src={bg1} alt="selfie" className="selfie"/>
        </div>
    )
}

export default About; 