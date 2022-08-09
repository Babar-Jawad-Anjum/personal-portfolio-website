import React from 'react'
import './services.css'
import {CgCheck} from 'react-icons/cg'

const Services = () => {
  return (
    <section id='services'>
      
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

        <article className="service">

          <div className="service__head">

            <h3>Game Development</h3>

          </div>

          <ul className='service__list'>
            <li>
              <CgCheck className='service__list-icon'/>
              <p>Full Game APK & AAB Files</p>
            </li>
            <li>
              <CgCheck className='service__list-icon'/>
              <p>Cross-platform (iOS, Android)</p>
            </li>
            <li>
              <CgCheck className='service__list-icon'/>
              <p>Game Prototype</p>
            </li>
            <li>
              <CgCheck className='service__list-icon'/>
              <p>High Quality Icon</p>
            </li>
            <li>
              <CgCheck className='service__list-icon'/>
              <p>Google Admob ads Integration</p>
            </li>
            <li>
              <CgCheck className='service__list-icon'/>
              <p>Publishing To PlayStore OR AppStore</p>
            </li>
          </ul>

        </article>
        {/* End of UI/UX */}
        <article className="service">

          <div className="service__head">

            <h3>Web Development</h3>

          </div>

          <ul className='service__list'>
            <li>
              <CgCheck className='service__list-icon'/>
              <p>Landing Pages</p>
            </li>
            <li>
              <CgCheck className='service__list-icon'/>
              <p>Custom One Page Template</p>
            </li>
            <li>
              <CgCheck className='service__list-icon'/>
              <p>Custom many Pages Template</p>
            </li>
            <li>
              <CgCheck className='service__list-icon'/>
              <p>Responsive Bootstrap Design</p>
            </li>
            <li>
              <CgCheck className='service__list-icon'/>
              <p>Responsive Designs</p>
            </li>
            <li>
              <CgCheck className='service__list-icon'/>
              <p>MERN Full Stack Website</p>
            </li>
            <li>
              <CgCheck className='service__list-icon'/>
              <p>REST API's</p>
            </li>
            <li>
              <CgCheck className='service__list-icon'/>
              <p>HTML/ CSS/ JavaScript</p>
            </li>
            <li>
              <CgCheck className='service__list-icon'/>
              <p>CSS3 Animations</p>
            </li>
          </ul>

        </article>
        {/* End of Web Development */}
        <article className="service">

          <div className="service__head">

            <h3>Mobile Apps</h3>

          </div>

          <ul className='service__list'>
            <li>
              <CgCheck className='service__list-icon'/>
              <p>Custom Mobile App Development</p>
            </li>
            <li>
              <CgCheck className='service__list-icon'/>
              <p>React Native Development.</p>
            </li>
            <li>
              <CgCheck className='service__list-icon'/>
              <p>Flutter App Development</p>
            </li>
            <li>
              <CgCheck className='service__list-icon'/>
              <p>Mobile App UI/UX Design</p>
            </li>
            <li>
              <CgCheck className='service__list-icon'/>
              <p>Design App Icon</p>
            </li>
            <li>
              <CgCheck className='service__list-icon'/>
              <p>Integrate Push Notification</p>
            </li>
          </ul>

        </article>
        {/* End of Content Creation */}

      </div>

    </section>
  )
}

export default Services
