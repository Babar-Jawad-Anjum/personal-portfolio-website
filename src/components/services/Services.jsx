import React, { useEffect } from "react";
import "./services.css";
import { CgCheck } from "react-icons/cg";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* Full Stack Development */}
        <article data-aos="fade-left" className="service">
          <div className="service__head">
            <h3>Full-Stack Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <CgCheck className="service__list-icon" />
              <p>Production-ready web applications</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>React & Next.js (SSR, ISR, App Router)</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>Scalable backend with Node.js & NestJS</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>REST & GraphQL API development</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>Authentication & authorization (JWT, OAuth)</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>Real-time features using Socket.io</p>
            </li>
          </ul>
        </article>

        {/* Backend & System Design */}
        <article data-aos="fade-left" className="service">
          <div className="service__head">
            <h3>Backend & System Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <CgCheck className="service__list-icon" />
              <p>System design (HLD & LLD)</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>Clean Architecture & Domain-Driven Design</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>Database design & query optimization</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>Monolithic & microservices architectures</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>Performance & scalability optimization</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>Secure and maintainable API design</p>
            </li>
          </ul>
        </article>

        {/* DevOps & Cloud */}
        <article data-aos="fade-left" className="service">
          <div className="service__head">
            <h3>DevOps & Cloud Deployment</h3>
          </div>

          <ul className="service__list">
            <li>
              <CgCheck className="service__list-icon" />
              <p>AWS deployment (EC2, S3, RDS)</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>Docker & containerized applications</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>Nginx, reverse proxy & SSL setup</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>CI/CD pipelines with GitHub Actions</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>Monitoring & logging (CloudWatch)</p>
            </li>
            <li>
              <CgCheck className="service__list-icon" />
              <p>Production-ready & secure deployments</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
