import React,{useRef} from 'react'
import './Nav.css'
import {Link} from "react-scroll"

const Nav = () => {
  let menu = useRef()
  let mobile = useRef()

  const toggleMenu = () => {
    mobile.current.classList.toggle("activemobile")
    menu.current.classList.toggle("activeham")  
  }

  return (
    <nav>
        <h1>PORTFOLIO</h1>
        <ul className='desktopmenu'>
            <Link to="Home" smooth={true} activeClass='active' spy={true} duration={500}><li>Home</li></Link>
            <Link to="About" smooth={true} activeClass='active' spy={true} duration={500}><li>About</li></Link>
            <Link to="projects" smooth={true} activeClass='active' spy={true} duration={500}><li>Projects</li></Link>
            <Link to="Contact" smooth={true} activeClass='active' spy={true} duration={500}><li>Contact</li></Link>
        </ul>
        <div className="hamburger" ref={menu} onClick={toggleMenu}>
          <div className="ham"></div>
          <div className="ham"></div>
          <div className="ham"></div>
        </div>

        <ul className='mobilemenu' ref={mobile}>
            <Link to="Home" smooth={true} activeClass='active' spy={true} duration={500} onClick={toggleMenu}><li>Home</li></Link>
            <Link to="About" smooth={true} activeClass='active' spy={true} duration={500} onClick={toggleMenu}><li>About</li></Link>
            <Link to="projects" smooth={true} activeClass='active' spy={true} duration={500} onClick={toggleMenu}><li>Projects</li></Link>
            <Link to="Contact" smooth={true} activeClass='active' spy={true} duration={500} onClick={toggleMenu}><li>Contact</li></Link>
        </ul>
    </nav>
  )
}

export default Nav
