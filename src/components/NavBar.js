import { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.png';
import facebook from '../assets/img/facebook.png';
import instagram from '../assets/img/instagram.png';
import twitter from '../assets/img/twitter.png';
import { HashLink } from 'react-router-hash-link';
import {BrowserRouter as Router} from "react-router-dom";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        }
    
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, [])

      const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      }    

    return (
      <Router>
        <Navbar expand="md  " className={scrolled ? "scrolled":""}>
        <Container>
          <Navbar.Brand href="/">
            <img src = {logo} alt="Logo" className="logo" />
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                <a href="https://www.facebook.com/"><img src={facebook} alt="" /></a>
                <a href="https://www.instagram.com/"><img src={instagram} alt="" /></a>
                <a href="https://twitter.com/?lang=en"><img src={twitter} alt="" /></a>
                </div>
                <HashLink to='#connect'>
                <button className="vvd"><span>Let's Get in touch</span></button>
                </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
      </Router>
    )
}