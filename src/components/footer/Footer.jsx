import React from 'react'
import './footer.css'
import {AiFillInstagram} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'> BABAR </a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/baber4900" target='_blank' rel="noreferrer"> <FaFacebookF /> </a>
        <a href="https://www.instagram.com/b_._babar/?hl=en" target='_blank' rel="noreferrer"> <AiFillInstagram /> </a>
        <a href="https://twitter.com/Babar_410" target='_blank' rel="noreferrer"> <AiOutlineTwitter /> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Babar Personal Portfolio || All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
