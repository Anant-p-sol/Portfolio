import React from 'react'
import './Nav.css'
import {Link} from "react-scroll"
const Nav = () => {
  return (
    <nav>
        <h1>PORTFOLIO</h1>
        <ul className='desktopmenu'>
            <Link to="Home" smooth={true} activeClass='active' spy = {true} duration={500}><li>Home</li></Link>
            <Link to="About" smooth={true} activeClass='active' spy = {true} duration={500}><li>About</li></Link>
            <Link to="Projects" smooth={true} activeClass='active' spy = {true} duration={500}><li>Projects</li></Link>
            <Link to="Contect" smooth={true} activeClass='active' spy = {true} duration={500}><li>Contect</li></Link>
            
            
        </ul>
        <div className="hamburger">
          <div className="ham"></div>
          <div className="ham"></div>
          <div className="ham"></div>
        </div>
        <ul className='mobilemenu'>
            <Link to="Home" smooth={true} activeClass='active' spy = {true} duration={500}><li>Home</li></Link>
            <Link to="About" smooth={true} activeClass='active' spy = {true} duration={500}><li>About</li></Link>
            <Link to="Projects" smooth={true} activeClass='active' spy = {true} duration={500}><li>Projects</li></Link>
            <Link to="Contect" smooth={true} activeClass='active' spy = {true} duration={500}><li>Contect</li></Link>
            
            
        </ul>
    </nav>
  )
}

export default Nav