import React, { useRef } from 'react';
import './Contact.css';
import Facebook from '../../assets/fb.logo.png';
import Yahoo from '../../assets/yahoo.logo.png';
import Github from '../../assets/github.logo.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_n967dwo', 'template_sjvwt5s', form.current, {
        publicKey: 'tIsVlAGGT9TE4TJBZ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email Sent!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contactPage">
      <div className="contactContainer">
        <div className="contactLeft">
          <h1 className="contactTitle">Contact me</h1>
          <p className="contactText">
            Please fill out the form on the right to discuss any work opportunities.
          </p>
        </div>

        <div className="contactRight">
          <form ref={form} onSubmit={sendEmail} className="contactForm">
            <div className="formRow">
              <div className="formGroup">
                <label>First name*</label>
                <input type="text" name="first_name" required />
              </div>
              <div className="formGroup">
                <label>Last name*</label>
                <input type="text" name="last_name" required />
              </div>
            </div>

            <div className="formGroup">
              <label>E-Mail*</label>
              <input type="email" name="your_email" required />
            </div>

            <div className="formGroup">
              <label>Write a message</label>
              <textarea name="message" rows="4"></textarea>
            </div>

            <button type="submit" className="submitBtn">Submit</button>

            <div className="footerLinks">
              <a href="#"><img src={Facebook} alt="Facebook" /></a>
              <a href="#"><img src={Github} alt="Github" /></a>
              <a href="#"><img src={Yahoo} alt="Yahoo" /></a>
            </div>

            <div className="legal">
              <a href="#">Impressum</a> | <a href="#">Datenschutz</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
