import React from 'react';
import './skills.css';
import Resume from '../../assets/resume.png';
import Skill from '../../assets/skill.png';
import Hobbies from '../../assets/hobbies.png';
import CV from '../../assets/CV.pdf';
import Passions from  '../../assets/passion.pdf';


const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>About Me</span>
            <span className='SkillDesc'> I am a web developer with an educational background in Physics. I was once a
                compassionate teacher and now transitioned into an experienced web
                developer who is passionate in creating an intuitive, user friendly websites. 
                Through CareerFoundry´s Full-Stack immersion course, I’ve built up my coding
                skills through hands- on experience by creating portfolio, websites, and native
                apps. I’m always open on new learnings  and exploring new technologies to
                grow further.  
            </span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={Resume} alt="CV" className='skillBarImg'/>
                    <div className='skillBarText'>
                        <p>Learn my professional background by downloading my CV.</p>
                        <a href={CV} download className="btn">Download PDF</a>
                    </div>
                </div>     
                <div className='skillBar'>
                    <img src={Skill} alt="Skill" className='skillBarImg'/>
                    <div className='skillBarText'>
                        <p>These are the skills I acquired throughout my experience.</p>
                        <a className="btn" href="https://github.com/plumbz/Portfolio-website" target="_blank">See
                    project on GitHub </a>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={Hobbies} alt="Hobbies" className='skillBarImg'/>
                    <div className='skillBarText'>
                        <p>Get to know me more by viewing my favorite activities.</p>
                        <a href={Passions} download className="btn">Check my hobbies. </a>
                    </div>
                </div>
             </div>   
            
        </section>
    )
}

export default Skills;