import React, { useEffect } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.PNG";
import IMG2 from "../../assets/portfolio2.PNG";
import IMG3 from "../../assets/portfolio3.PNG";
import IMG4 from "../../assets/countrty-finder.PNG";
import IMG5 from "../../assets/portfolio5.PNG";
import IMG6 from "../../assets/portfolio6.PNG";
import IMG7 from "../../assets/portfolio8.PNG";
import Aos from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Text-Utils App",
      // tech: "       React.js, Bootstrap",
      github: "https://github.com/Babar-Jawad-Anjum/TextUtils-React",
      demo: "https://babar-jawad-anjum.github.io/TextUtils-React/",
    },
    {
      id: 2,
      image: IMG2,
      title: "Fitness Website",
      github:
        "https://github.com/Babar-Jawad-Anjum/Final-Term-Project-Babar-Fitness",
      demo: "https://babar-fitness-club.herokuapp.com/",
    },
    {
      id: 3,
      image: IMG3,
      title: "Budget Calculator",
      github: "https://github.com/Babar-Jawad-Anjum/Budget-calculator",
      demo: "https://babar-jawad-anjum.github.io/Budget-calculator/",
    },
    {
      id: 4,
      image: IMG4,
      title: "Country Finder App",
      github: "https://github.com/Babar-Jawad-Anjum/country-finder",
      demo: "https://country-finder-wheat.vercel.app/",
    },
    {
      id: 5,
      image: IMG5,
      title: "E-Commerce Shoes Template",
      github: "https://github.com/Babar-Jawad-Anjum/shoes-template",
      demo: "https://luxury-naiad-040217.netlify.app/",
    },
    {
      id: 6,
      image: IMG6,
      title: "Cocktail-Db",
      github: "https://github.com/Babar-Jawad-Anjum/Cocktail-db",
      demo: "https://fanciful-souffle-29d33d.netlify.app/",
    },
    {
      id: 7,
      image: IMG7,
      title: "E-Commerce Store",
      github: "https://github.com/Babar-Jawad-Anjum/Ecommerce-Store",
      demo: "https://extraordinary-daffodil-9b84ea.netlify.app/tshirts",
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
              {/* <h5>Tech Used:{tech}</h5> */}
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
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
