import React, { useState } from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio1.png';
import Portfolio2 from '../../assets/portfolio2.png';
import Portfolio3 from '../../assets/portfolio3.png';
import Portfolio4 from '../../assets/portfolio4.png';
import Portfolio5 from '../../assets/portfolio5.png';
import Portfolio6 from '../../assets/portfolio6.png';

const portfolioItems = [
 {
    img: Portfolio1,
    title: "Pokédex",
    desc: "Pokédex is a web application designed to provid information about the Pokémon. The app features dynamic data fetching from an external API. Created using HTML, CSS and JavaScript",
    link: "https://plumbz.github.io/"
  },

  { img: Portfolio2,
    title: "MyFlix-React",
    desc: "MyFlix is a web application build using React. This application allows users to browse, search, and explore details about movies, directors, and genres, with additional functionalitiesfor user account management and personalization.",
    link: "https://my-testflix.netlify.app/login" },

  {  img: Portfolio3,
    title: "Movie API",
    desc: "Movie API, a RESTful backend application for managing movies, users, and favorite movie lists. It serves data about movies, directors, and genres, enabling users to interact with this data securely.",
    link: "https://github.com/plumbz/movie-api" },

  {  img: Portfolio4,
    title: "MeetApp",
    desc: "A serverless, progressive web application with React using a test- driven technique. The application uses the Google Calendar API to fetch upcoming events.",
    link: "https://meet-f7gvyt75m-plumbzs-projects.vercel.app" },

  {   img: Portfolio5,
    title: "Chat Time",
    desc: "ChatTime is a chat app for mobile devices that built with React Native. The app will provide users with a chat interface and option to sare images and thier location.",
    link: "https://plumbz.github.io/ChatTime" },

  {  img: Portfolio6,
    title: "MyFlix-Angular",
    desc: "A movie application built with Angular. offering users the ability to browse, search, and manage their favorite movies. This app highlights responsive design, Angular Material integration, and RESTful API connectivity for a seamless user experience.",
    link: "https://plumbz.github.io/myFlix-Angular-client/welcome"},
]

const Works = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    return (
        <section id='works'> 
            <h2 className='worksTitle'>Projects</h2>
            <span className="worksDesc">I take pride in paying attention the smallest details and making sure that my work is well made.
                I am excited to bring my skills and experience to help business achieve thier goals and create a strong online presence.
            </span>
            <div className='worksImgs'>
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="worksImgWrapper"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={item.img} alt={`Portfolio${index + 1}`} className="worksImg" />
            {hoveredIndex === index && (
              <div className="modalOverlay">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
            <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="modalLink"
                >
                View Project
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
          
        </section>
        );
}

export default Works;