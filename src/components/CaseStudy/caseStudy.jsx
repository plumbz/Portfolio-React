import React from 'react';
import './CaseStudy.css';
import Study from '../../assets/Study.pdf';
import Cstudy from '../../assets/Cstudy.png';
import ChatTime from '../../assets/ChatTime.pdf';
import Chat from '../../assets/Chat.png';
import Meet from '../../assets/Meet.png';
import MeetApp from '../../assets/MeetApp.pdf';

const CaseStudy = () => {
    return (
       <section id="contactPage">
            <div id="CaseStudy">
                <h2 className="caseTitle">My Case Study</h2>
                <p className="caseDesc">a presentation of my projects in a form of case study. 
                    Here narates how I solve the problem and achieved the objective over the
                    course of my completing project.</p>
            </div>
            <div className='CaseImgs'>
                <img src={Cstudy} alt="CaseStudy" className="CaseImg"/>
            </div>

             <button 
                className="btn" 
                onClick={() => window.open(Study, "_blank")}
              >
                See More
              </button>
              <div id="CaseStudy">
              
            </div>
            <div className='CaseImgs'>
                <img src={Chat} alt="CaseStudy" className="CaseImg"/>
            </div>
             <button 
                className="btn" 
                onClick={() => window.open(ChatTime, "_blank")}
              >
                See More
              </button>
                  <div id="CaseStudy">

            </div>
            <div className='CaseImgs'>
                <img src={Meet} alt="CaseStudy" className="CaseImg"/>
            </div>
            
             <button 
                className="btn" 
                onClick={() => window.open(MeetApp, "_blank")}
              >
                See More
              </button>
            
        </section>
    )
}

export default CaseStudy