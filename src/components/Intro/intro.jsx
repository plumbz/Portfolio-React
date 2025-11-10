import React from 'react';
import './intro.css';
import pp from '../../assets/pp.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className='introName'>Plumby</span> <br />Website Developer</span>
                <p className="introPara">
                    I am a passionate web developer with experience in creating <br/>
                    responsive and user-friendly websites.
                </p>
                {/* <Link 
                    to="projects" 
                    smooth={true} 
                    duration={500}
                    className="scrollBtn"
                >
                    <svg 
                        width="40" 
                        height="40" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                    >
                        <path d="M12 5v14M19 12l-7 7-7-7"/>
                    </svg>
                </Link> */}
            </div>
            <img src={pp} alt="Profile" className='pp' />
        </section>
    )
}

export default Intro;