import React from 'react';
import './skills.css';
import CV from '../../assets/logo.png';
import Hobbies from '../../assets/logo.png';
import Skill from '../../assets/logo.png';


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
                    <img src={CV} alt="CV" className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Download my CV</h2>
                        <p>egal</p>
                    </div>
                </div>     
                <div className='skillBar'>
                    <img src={Skill} alt="Skill" className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>My Skills</h2>
                        <p>the skills I aquaire throught my experience.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={Hobbies} alt="Hobbies" className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>My Hobbies</h2>
                        <p>you can know me more by viewing my favorite activities</p>
                    </div>
                </div>
             </div>   
            
        </section>
    )
}

export default Skills;