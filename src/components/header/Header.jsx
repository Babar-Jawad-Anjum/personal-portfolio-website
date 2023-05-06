import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me2.png";
import TypeOut from "react-typeout";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  const words = [
    "<MERN Stack Developer />",
    "<ReactJs Developer />",
    "<NodeJs Developer />",
    "<Full Stack JavaScript Developer />",
  ];
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>BABAR JAWAD</h1>
        <h5 className="text-light" style={{ minHeight: "22px" }}>
          <TypeOut words={words} typeSpeed={100} pauseSpeed={1500} />
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
