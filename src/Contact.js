import React from 'react';
import "./Contact.css";
import contactImg from "./img/about-9.jpg";

function Contact() {
    return (
        <div className="contact component__space" >
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me</h1>
                             <p className="hire__text white">I am available for freelance work.connect with me via phone:</p>
                            <p className="hire__text white"><strong>+8436 14 245</strong> or email <strong>admin@example.com</strong></p>
                        </div>
                        <div className="input__box">
                            <input type="text" className="contact name" placeholder="your name *" />
                            <input type="text" className="contact email" placeholder="your Email *" />
                            <input type="text" className="contact subject" placeholder="write a Subject" />
                            <textarea name="message" id="message" placeholder="write a message" ></textarea>
                            <button className="btn contact pointer" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
                 <div className="col__2">
                        <img src={contactImg} alt="" className="contact__img" />
                 </div>
            </div>
        </div>
    )
}

export default Contact
