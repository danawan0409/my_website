import React, {useRef} from "react";
import './contact.css';
import phone from '../../../assets/phone.svg';
import github from '../../../assets/github.svg';
import mail from '../../../assets/mail.png';
import linkedin from '../../../assets/linkedin.svg';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef;
    
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="contact" id='contact'>
            <div className="contactMe">
                <div className="contactTitle">Contact Me</div>
                <div className="contactContent">
                    <img src={mail} className="contactIcon"/>
                    <a href="mailto:dana.wan0409@gmail.com" className="contactInfo">dana.wan0409@gmail.com</a>
                </div>
                <div className="contactContent">
                    <img src={phone} className="contactIcon"/>
                    <a href="tel:647-916-0228" className="contactInfo">647-916-0228</a>
                </div>  
                <div className="contactContent">
                    <img src={linkedin} className="contactIcon"/>
                    <a href="https://www.linkedin.com/in/dana-wan/" target="_blank" className="contactInfo">linkedin.com/in/dana-wan/</a>
                </div>  
                <div className="contactContent">
                    <img src={github} className="contactIcon"/>
                    <a href="https://github.com/danawan0409" target="_blank" className="contactInfo">github.com/danawan0409</a>
                </div>    
            </div>
            {/*<div className="sendAMessage">
                <div className="sendTitle">Send A Message</div>
                <form className="sendForm">
                    <input type="text" className="name" placeholder="Your Name"/>
                    <input type="email" className="email" placeholder="Your Email"/>
                    <textarea className="msg" id="msg" name="message" rows="15" placeholder="Your Message"/>
                    <button type='submit' value='Send'className="submitBtn">Send</button>
                </form>
    </div>*/}
        </div>
    )
}

export default Contact; 