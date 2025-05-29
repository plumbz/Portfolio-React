import React from 'react';
import './intro.css';
import bg from '../../assets/bg.png';
import btnImg from '../../assets/hireMe.png'
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className='introName'>Plumby</span> <br />Website Developer</span>
                <p className="introPara">I am a passionate web developer with experience in creating <br/>resposive and user-friendly websites. </p>
           <Link><button className="btn">Hire me</button> </Link>
            </div>
            <img src={bg} alt="Profile" className='bg' />
        </section>
    )
}

export default Intro;