import React, { useEffect } from "react";
import "./about.css";
import ME from "../../assets/me-about.jpeg";
import { FaAward } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { VscFolderActive } from "react-icons/vsc";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div data-aos="fade-left" className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article data-aos="fade-left" className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.5+ Years Working</small>
            </article>

            <article data-aos="fade-left" className="about__card">
              <TbUsers className="about__icon" />
              <h5>Clients</h5>
              <small>50+ World Wide</small>
            </article>

            <article data-aos="fade-left" className="about__card">
              <VscFolderActive className="about__icon" />
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>

          <p data-aos="fade-left">
            Babar here, a <b>MERN stack developer</b> with over <b>1.5+ </b>
            years of experience in developing full stack MERN applications also
            having expertise in <b>.NET CORE</b>. I have strong grip on the
            latest emerging technologies like{" "}
            <b>
              {" "}
              JavaScript, Reactjs, Nextjs, Nodejs, Expressjs, GraphQL, REST
              API's, HTML, CSS, TailwindCSS, Bootstrap, MongoDb, MySQL and
              PostgreSQL
            </b>
            . I have experience in deployment of applications on Heroku, Vercel,
            Netlify & GitHub Pages. I can build user friendly UI's and fast Full
            stack applications. Future goals are WEB3, Blockchain, Machine
            Learning & artificial intelligence.
          </p>

          <a data-aos="fade-left" href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
