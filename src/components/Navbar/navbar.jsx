import React, {useState} from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import Menu from '../../assets/menu.png';



const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
    <nav className='navbar'>
        <img src= {logo} alt="Logo" className='logo'/>
        <div className="desktopMenu">
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projects</Link>
            <Link activeClass="active" to="CaseStudy" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">CaseStudy</Link>
        
        </div>
        <button className='desktopMenuBtn'onClick={() => {
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src= "" alt="" className='desktopMenuImg' />Contact Me</button>

          <img src= {Menu} alt="Menu" className='mobMenu'onClick={() => setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
            <Link activeClass="active" to="CaseStudy" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>CaseStudy</Link>
            <Link activeClass="active" to="CaseStudy" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
    )
}

export default Navbar