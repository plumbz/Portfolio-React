import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio1.png';
import Portfolio2 from '../../assets/portfolio2.png';
import Portfolio3 from '../../assets/portfolio3.png';
import Portfolio4 from '../../assets/portfolio4.png';
import Portfolio5 from '../../assets/portfolio5.png';
import Portfolio6 from '../../assets/portfolio6.png';


const Works = () => {
    return (
        <section id='works'> 
            <h2 className='worksTitle'>My Portfolio</h2>
            <span className="worksDesc">I take pride in paying attention the smallest details and making sure that my work is well made.
                I am excited to bring my skills and experience to help business achieve thier goals and create a strong online presence.
            </span>
            <div className='worksImgs'>
                <img src={Portfolio1} alt="Portfolio1" className="worksImg" />
                <img src={Portfolio2} alt="Portfolio2" className="worksImg" />
                <img src={Portfolio3} alt="Portfolio3" className="worksImg" />
                <img src={Portfolio4} alt="Portfolio4" className="worksImg" />
                <img src={Portfolio5} alt="Portfolio5" className="worksImg" />
                <img src={Portfolio6} alt="Portfolio6" className="worksImg" />
            </div>    
            <button className="workBtn">See More</button>   
        </section>
        );
}

export default Works;