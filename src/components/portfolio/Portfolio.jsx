import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.PNG'
import IMG2 from '../../assets/portfolio2.PNG'
import IMG3 from '../../assets/portfolio3.PNG'
import IMG4 from '../../assets/portfolio4.PNG'
import IMG5 from '../../assets/portfolio5.PNG'
import IMG6 from '../../assets/portfolio6.PNG'

const Portfolio = () => {

  const data = [

    {
      id: 1,
      image: IMG1,
      title: 'Text-Utils App',
      github: 'https://github.com/Babar-Jawad-Anjum/TextUtils-React',
      demo: 'https://babar-jawad-anjum.github.io/TextUtils-React/'
    },
    {
      id: 2,
      image: IMG2,
      title: 'Fitness Website',
      github: 'https://github.com/Babar-Jawad-Anjum/Final-Term-Project-Babar-Fitness',
      demo: 'https://babar-fitness-club.herokuapp.com/'
    },
    {
      id: 3,
      image: IMG3,
      title: 'Budget Calculator',
      github: 'https://github.com/Babar-Jawad-Anjum/Budget-calculator',
      demo: 'https://babar-jawad-anjum.github.io/Budget-calculator/'
    },
    {
      id: 4,
      image: IMG4,
      title: 'CRUD Application',
      github: 'https://github.com/Babar-Jawad-Anjum/CRUD-API-Sample',
      demo: 'https://crud-api-sample.herokuapp.com/'
    },
    {
      id: 5,
      image: IMG5,
      title: 'E-Commerce Shoes Template',
      github: 'https://github.com/Babar-Jawad-Anjum/shoes-template',
      demo: 'https://ecommerce-shoes-template.herokuapp.com/'
    },
    {
      id: 6,
      image: IMG6,
      title: 'Cocktail-Db',
      github: 'https://github.com/Babar-Jawad-Anjum/Cocktail-db',
      demo: 'https://cocktail-dbb.herokuapp.com/'
    }
  ]

  return (
    <section id='portfolio'>
      
        <h5>My recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">

        {
            data.map(({id, image, title, github, demo}) => {
              
              return (
                
                <article className="portfolio__item" key={id}>

                <div className="portfolio__item-image"> <img src={image} alt={title} /> </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
    
                <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
    
                </div>
    
              </article>
    
              )


            })
          }

        </div>

    </section>
  )
}

export default Portfolio
