import React from 'react'
import CTA from './CTA'
// import ME from '../../assets/me-1.png'
import HeaderSocials from './HeaderSocials'
import './header.css'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Jesus Garcia Jara</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src="http://placekitten.com/700/1200" alt="Jesus G Jara Web Developer" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header