import React from 'react';
import './CaseStudy.css';
import Study from '../../assets/Study.pdf';
import Cstudy from '../../assets/Cstudy.png';
import ChatTime from '../../assets/ChatTime.pdf';
import Chat from '../../assets/Chat.png';
import MeetApp from '../../assets/MeetApp.pdf';
import Meet from '../../assets/Meet.png';

const caseStudies = [
  {
    img: Cstudy,
    title: "MyFlix",
    desc: "MyFlix is a web application built using React. This application allows users to browse, search, and explore details about movies, directors, and genres, with additional functionalities for user account management and personalization.",
    link: Study,
  },
  {
    img: Chat,
    title: "ChatTime",
    desc: "ChatTime is a chat app for mobile devices built with React Native. The app provides users with a chat interface and options to share images and their location.",
    link: ChatTime,
  },
  {
    img: Meet,
    title: "Meet App",
    desc: "Meet App is a progressive web app with offline capability and a serverless backend developed using Test-Driven Development (TDD).",
    link: MeetApp,
  },
];

const CaseStudy = () => {
  return (
    <section id="caseStudy">
      <h2 className="caseTitle">My Case Studies</h2>
      <p className="caseDesc">
        A presentation of my projects in a form of case study. Here narrates how I solved problems 
        and achieved objectives throughout each project.
      </p>

      <div className="caseGrid">
        {caseStudies.map((study, index) => (
          <div className="caseCard" key={index}>
            <img src={study.img} alt={study.title} className="caseImg" />
            <h3>{study.title}</h3>
            <p>{study.desc}</p>
            <button 
              className="seeMoreBtn" 
              onClick={() => window.open(study.link, "_blank")}
            >
              See more
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudy;
