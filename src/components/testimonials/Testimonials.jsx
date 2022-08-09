import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/avatar1.jpg'
import Avt2 from '../../assets/avatar2.jpg'
import Avt3 from '../../assets/avatar3.jpg'
import Avt4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

  const data = [

    {
      avatar: Avt1,
      name: 'Tina Snow',
      review: 'He is an experienced developer, done my work with his quality experience in very short time. Highly recommended him. I will buy again'

    },
    {
      avatar: Avt2,
      name: 'Paul jim',
      review: 'A wonderful person, master of the web, he is really good, thank you my brother, he did very great project for me, even he did more than what I paid for, Thank you soo much.'

    },
    {
      avatar: Avt3,
      name: 'Kitta veei',
      review: 'This team has been awesome to work with. They are very knowledgeable, competent, and they really go the extra mile with regards to communicating their ideas as well as helping understand the processes they are utilizing to get it done.'

    },
    {
      avatar: Avt4,
      name: 'Aaimi loe',
      review: 'Great job, design implemented as required. Small changes are not a problem. Very pleasant contact, answers quickly and is reliable. i can definitely recommend it.'

    },

  ]

  return (
    <section id='testimonials'>
      
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[ Pagination ]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
       >

        {

          data.map(({avatar, name, review}, index) => {

            return (

              <SwiperSlide className="testimonial" key={index}>

                <div className="client__avatar"> 
                  
                  <img src={avatar} alt="Avatar" />
                  
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small> 

              </SwiperSlide>

            )

          })

        }

      </Swiper>

    </section>
  )
}

export default Testimonials
