import React from 'react';
import './skills.css';
import CV from '../../assets/logo.png';
import Hobbies from '../../assets/logo.png';
import Skill from '../../assets/logo.png';


const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>About Me</span>
            <span className='SkillsDesc'> I am a web developer with an educational background in Physics. I was once a
        compassionate teacher and now transitioned into an experienced web
        developer who is passionate in creating an intuitive, user friendly websites. 
        Through CareerFoundry´s Full-Stack immersion course, I’ve built up my coding
        skills through hands- on experience by creating portfolio, websites, and native
         apps. I’m always open on new learnings  and exploring new technologies to
        grow further.  </span>
            <div className='skilllBar'>
                <img src={CV} alt="CV" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Download my CV</h2>
                    <p>egal</p>
                </div>
                 <div className='skilllBar'>
                <img src={Skill} alt="Skill" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2></h2>
                    <p></p>
                </div>
                 <div className='skilllBar'>
                <img src={Hobbies} alt="Hobbies" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2></h2>
                    <p></p>
                </div>
            </div>
            </div>
            </div>
        </section>
    )
}

export default Skills;