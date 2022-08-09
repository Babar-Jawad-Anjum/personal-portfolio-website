import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {TbUsers} from 'react-icons/tb'
import {VscFolderActive} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">

          <div className="about__me-image">

            <img src={ME} alt="About img" />

          </div>

        </div>

        <div className="about__content">

          <div className="about__cards">

            <article className='about__card'>

              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>

            </article>

            <article className='about__card'>

              <TbUsers className='about__icon' />
              <h5>Clients</h5>
              <small>50+ World Wide</small>

            </article>

            <article className='about__card'>

              <VscFolderActive className='about__icon' />
              <h5>Projects</h5>
              <small>50+ Completed</small>

            </article>

          </div>

          <p>I am Babar, a Fresh MERN Stack Developer with
            years of self experience and training, specialising
            in creating innovative Frontend designs using
            React and Full stack MERN applications.
            Constantly evolving and growing. I want to be an
            Unstoppable person who can sort out any
            problem.</p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>

      </div>

    </section>
  )
}

export default about
