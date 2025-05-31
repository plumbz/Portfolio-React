import React from 'react';
import './contact.css';
import CaseStudy from '../../assets/CaseStudy.png';
import Facebook from '../../assets/fb.logo.png';
import Yahoo from '../../assets/yahoo.logo.png';
import Github from '../../assets/github.logo.png';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


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
            <div id="CaseStudy">
                <h2 className="caseTitle">My Case Study</h2>
                <p className="caseDesc">a presentation of my projects in a form of case study. 
                    Here narates how I solve the problem and achieved the objective over the
                    course of my completing project.</p>
            </div>
            <div className='CaseImgs'>
                <img src={CaseStudy} alt="CaseStudy" className="CaseImg"/>
            </div>
             <button className="workBtn">See More</button>   
            <div id="contact">
                <h1 className="contactTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className="name" placeholder='Your Name' name='your_name'/>
                    <input type='email' className='email' placeholder='Your Email' name='your_email' />
                    <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
                    <button type="submit" value="Send" className="submitBtn">Submit</button>
                    <div className='linksContainer'>
                        <img src={Facebook} alt="Facebook" className='link'/>
                        <img src={Yahoo} alt="Yahoo" className='link'/>
                        <img src={Github} alt="Github" className='link'/>
                    </div> 
                </form>
            </div>  
        </section>
    )
}

export default Contact