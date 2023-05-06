import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaFacebookF } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/babar-mughal-39a067227/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Babar-Jawad-Anjum"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.facebook.com/baber4900"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF />
      </a>
    </div>
  );
};

export default HeaderSocials;
