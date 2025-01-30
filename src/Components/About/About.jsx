// import React from 'react'
import './About.css';
import CountUp from 'react-countup';
import {motion} from 'framer-motion'
import { fadeIn } from '../../Variants';

function About() {
  return (
    <div className="about-container">
      <motion.div
      variants={fadeIn('up', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.7}}
      className="about-header">
        <h2>About Us</h2>
      </motion.div>
      <div className="about-content">
        <h2>Why Choose Us</h2>
        <p>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the 
          Semantics, a large language ocean.
        </p>
      </div>
       <div className="count">
        <span>50 Years</span> of <br />Experience in Various Cases
        <div className="count">
 <div className="start">
       <div className="cou">
        <span>
         <CountUp start={10} end={50} duration={10}></CountUp>
         <span className="secondary">Awards</span>
        </span>
       </div>
       <div className="cou">
        <span><CountUp start={20} end={200} duration={10}></CountUp></span>
       
        <span className='secondary'>Cases Win</span>
        
       </div>
       <div className="cou">
        <span><CountUp start={1000} end={2000} duration={10}></CountUp></span>
        <span className='secondary'>Clients</span>
       </div>
       <div className="cou">
        <span><CountUp start={100} end={200} duration={10}></CountUp></span>
        <span className='secondary'>Attorneys</span>
       </div>
      </div>
      </div> 
       </div>
    </div>
  );
}

export default About;
