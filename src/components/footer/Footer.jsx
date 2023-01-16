import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">JesusGJara</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#servicio">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/jesusgjara" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/jesusgjara" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://twitter.com/gsuscodes" target="_blank" rel="noreferrer"><BsTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>
          Made with Love by JesusGJara
        </small>
      </div>
    </footer>
  )
}

export default Footer