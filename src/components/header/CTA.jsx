import React from "react";
import CV from "../../assets/Babar-resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download="Babar-Resume.pdf" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
