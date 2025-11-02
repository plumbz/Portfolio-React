import React, {useState} from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import Menu from '../../assets/menu.png';




const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
    <nav className='navbar'>
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuLogo">Plumby Eschenbacher</Link>
        <div className="desktopMenu">
            
            <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projects</Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass="active" to="caseStudy" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">CaseStudy</Link>

        </div>
        <button className='desktopMenuBtn'onClick={() => {
            document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src= "" alt="" className='desktopMenuImg' />Contact Me</button>

          <img src= {Menu} alt="Menu" className='mobMenu'onClick={() => setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass="active" to="caseStudy" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>CaseStudy</Link>
            <Link activeClass="active" to="contactPage" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuBtn" onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
    )
}

export default Navbar