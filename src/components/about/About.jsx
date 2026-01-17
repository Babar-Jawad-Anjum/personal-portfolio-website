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
              <small>3.5+ Years Working</small>
            </article>

            <article data-aos="fade-left" className="about__card">
              <TbUsers className="about__icon" />
              <h5>Clients</h5>
              <small>5+ World Wide</small>
            </article>

            <article data-aos="fade-left" className="about__card">
              <VscFolderActive className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p data-aos="fade-left">
            Hi, I’m <b>Babar</b> 👋 — a <b>Full-Stack Software Engineer</b> with{" "}
            <b>3.5+ years</b>{" "}
            of professional experience building scalable, production-ready web
            applications. I primarily work with
            <b style={{ marginBottom: "12px" }}>
              JavaScript, React, Next.js, Node.js, NestJS, REST & GraphQL APIs,
              PostgreSQL, MongoDB, and MySQL
            </b>
            .
            <br />I have hands-on experience across the full development
            lifecycle — from backend architecture and API design to frontend
            performance optimization and cloud deployments. I’ve built real-time
            systems, AI-powered features, and deployed secure, multi-tier
            applications on{" "}
            <b style={{ marginBottom: "12px" }}>
              AWS using Docker, Nginx, and CI/CD pipelines
            </b>
            .
            <br />I enjoy solving problems that require{" "}
            <b>system-level thinking</b>, clean architecture, and long-term
            scalability. Currently, I’m going deeper into{" "}
            <b>System Design, Backend Architecture, and DevOps</b>{" "}
            to build more reliable and scalable systems.
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
