import React from "react";
import "./footer.css";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
} from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        BAB^R
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.facebook.com/baber4900"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/b_._babar/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram />
        </a>
        <a
          href="https://twitter.com/Babar_410"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/babar-mughal-39a067227/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/Babar-Jawad-Anjum"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Babar Personal Portfolio || All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
