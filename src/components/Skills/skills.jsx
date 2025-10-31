import React from 'react';
import './skills.css';

import Cv from '../../assets/cv.png';
import Certies from '../../assets/certies.png';
import Hobbies from '../../assets/hobbies.png';
import CV from '../../assets/CV.pdf';
import Passions from '../../assets/passion.pdf';
import Cert from '../../assets/cert.pdf';
import JS from '../../assets/js.png';

const Skills = () => {
  return (
    <section id="skills" className="about-section">
      <div className="about-wrapper">
        <div className="about-text">
          <h2 className='skillsTitle'>About Me</h2>
          <p>
            I am a web developer with an educational background in Physics. I was once a
            compassionate teacher and now transitioned into an experienced web developer
            who is passionate in creating an intuitive, user friendly websites.
          </p>
          <p>
            Through CareerFoundry´s Full-Stack immersion course, I’ve built up my coding
            skills through hands-on experience by creating portfolios, websites, and native
            apps.
          </p>
          <p>
            I’m always open on new learnings and exploring new technologies to grow further.
          </p>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <img src={Cv} alt="CV" />
            <h3>Curriculum Vitae</h3>
            <p>Learn my professional background by downloading my CV.</p>
            <a href={CV} download className="about-btn">Download PDF</a>
          </div>

          <div className="about-card">
            <img src={Certies} alt="Certificates" />
            <h3>Certificates</h3>
            <p>The certificates I earned after completing 500+ hours of training.</p>
            <a href={Cert} target="_blank" rel="noreferrer" className="about-btn">Check my certificates</a>
          </div>

          <div className="about-card">
            <img src={JS} alt="Skills" />
            <h3>Job Skills</h3>
            <p>These are the skills I acquired throughout my experience.</p>
            <a className="about-btn" href="https://github.com/plumbz/Portfolio-website" target="_blank" rel="noreferrer">
              See projects on GitHub
            </a>
          </div>

          <div className="about-card">
            <img src={Hobbies} alt="Hobbies" />
            <h3>Hobbies</h3>
            <p>Get to know me more by viewing my favorite activities.</p>
            <a href={Passions} className="about-btn">Check my hobbies</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
