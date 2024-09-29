import React, { useEffect } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.PNG";
// import IMG2 from "../../assets/portfolio2.PNG";
import IMG3 from "../../assets/portfolio3.PNG";
import IMG4 from "../../assets/countrty-finder.PNG";
import IMG5 from "../../assets/portfolio5.PNG";
import IMG6 from "../../assets/portfolio6.PNG";
import IMG7 from "../../assets/portfolio8.PNG";
import IMG8 from "../../assets/portfolio9.png";
import IMG9 from "../../assets/Tour27.png";
import MERN_AUTH from "../../assets/mern-auth.png";
import TRELLO from "../../assets/trello.jpeg";
import ESTATE from "../../assets/estate.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const data = [
    {
      id: 1.1,
      image: TRELLO,
      title: "Trello 2.0",
      // tech: "React.Js, Bootstrap",
      github: "https://github.com/Babar-Jawad-Anjum/trello-clone-2.0",
      demo: "https://trello-clone-2-0-qiaa.vercel.app/",
    },
    {
      id: 1.2,
      image: MERN_AUTH,
      title: "Advanced MERN Auth",
      // tech: "React.Js, Bootstrap",
      github: "https://github.com/Babar-Jawad-Anjum/Advanced-MERN-Auth",
      demo: "https://advanced-mern-auth-nurw.onrender.com/",
    },

    {
      id: 1.3,
      image: ESTATE,
      title: "Real Estate",
      // tech: "React.Js, Bootstrap",
      github: "https://github.com/Babar-Jawad-Anjum/real-estate-ui",
      demo: "https://e-estate.netlify.app/",
    },
    {
      id: 7,
      image: IMG7,
      title: "E-Commerce Store",
      // tech: "Next.Js, TailWind CSS, API's, MongoDb, SSR",
      github: "https://github.com/Babar-Jawad-Anjum/ecommerce-website",
      demo: "https://aesthetic-brioche-06e2b8.netlify.app/",
    },
    {
      id: 3,
      image: IMG3,
      title: "Budget Calculator",
      // tech: "React.Js, Bootstrap",
      github: "https://github.com/Babar-Jawad-Anjum/Budget-calculator",
      demo: "https://babar-jawad-anjum.github.io/Budget-calculator/",
    },
    {
      id: 1,
      image: IMG1,
      title: "Text-Utils App",
      // tech: "React.Js, Bootstrap",
      github: "https://github.com/Babar-Jawad-Anjum/TextUtils-React",
      demo: "https://babar-jawad-anjum.github.io/TextUtils-React/",
    },
    {
      id: 7,
      image: IMG8,
      title: "Beyond Technologies",
      // tech: "Next.Js, TailWind CSS, API's, MongoDb, SSR",
      // github: "https://github.com/Babar-Jawad-Anjum/ecommerce-website",
      demo: "https://beyondtechservices.com/",
    },
    {
      id: 7,
      image: IMG9,
      title: "Tour27",
      // tech: "Next.Js, TailWind CSS, API's, MongoDb, SSR",
      // github: "https://github.com/Babar-Jawad-Anjum/ecommerce-website",
      demo: "https://tour27.com/",
    },

    // {
    //   id: 2,
    //   image: IMG2,
    //   title: "Fitness Website",
    //   // tech: "Node Js, ExpressJs, Bootstrap, Authentication, Authorization, MongoDb",
    //   github:
    //     "https://github.com/Babar-Jawad-Anjum/Final-Term-Project-Babar-Fitness",
    //   demo: "https://babar-fitness-club.herokuapp.com/",
    // },

    {
      id: 4,
      image: IMG4,
      title: "Country Finder App",
      // tech: "React.Js, Bootstrap, API, Search Filter",
      github: "https://github.com/Babar-Jawad-Anjum/country-finder",
      demo: "https://country-finder-wheat.vercel.app/",
    },
    {
      id: 5,
      image: IMG5,
      title: "E-Commerce Shoes",
      // tech: "React.Js, Bootstrap",
      github: "https://github.com/Babar-Jawad-Anjum/shoes-template",
      demo: "https://luxury-naiad-040217.netlify.app/",
    },
    {
      id: 6,
      image: IMG6,
      title: "Cocktail-Db",
      // tech: "React.Js, Bootstrap, API",
      github: "https://github.com/Babar-Jawad-Anjum/Cocktail-db",
      demo: "https://fanciful-souffle-29d33d.netlify.app/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, tech, github, demo }) => {
          return (
            <article data-aos="fade-left" className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              {/* <h5 className="tech-sec">
                <span className="tech-heading">Tech Used: </span> {tech}
              </h5> */}
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>

              {/* <div class="tooltip-container">
                <span class="trigger">Stack Used</span>
                <div class="tooltip">{tech}</div>
              </div> */}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
