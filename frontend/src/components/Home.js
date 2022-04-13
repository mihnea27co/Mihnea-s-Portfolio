import React from 'react'

import { motion } from "framer-motion";

import man from '../assets/Mann_am_Komputer.svg'
import circle from '../assets/eclipse_bg.png'
import reactImg from '../assets/react.png'
import sassImg from '../assets/sass.png'
import nodeImg from '../assets/node.png'

const Home = () => {


  const scaleVariants = {
    whileInView: {
      scale: [0.4, 1],
      opacity: [0, 1],
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div id='home' className='home'>
      <div className="home__content">
        <p className='home__firstPTag'>Hi, my name is</p>
        <p className='home__name'>Mihnea Cojocaru</p>
        <p className='home__whatIDo'>I'm a web developer.</p>
        <p className='home__description'>I'm a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently I'm focused on building full stack web applications</p>
        <button className='home__button'>View Work </button>
      </div>
      <div className="home__drawing">
        <img src={man} alt="Mann am Pc" />
        <motion.img className='home__backgroundCircle' src={circle} alt="Background circle" variants={scaleVariants}whileInView={scaleVariants.whileInView}/>
        <motion.img src={reactImg} 
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut', delay:0.2 }}
          className='home__reactCircle'/>
          <motion.img src={sassImg} 
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.4 }}
          className='home__sassCircle'/>
          <motion.img src={nodeImg} 
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.6 }}
          className='home__nodeCircle'/>
      </div>
      <div className='home__wave'>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
      </div>
    </div>
  )
}

export default Home