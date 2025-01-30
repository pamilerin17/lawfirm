// import React from 'react'
import './More.css'
import { BsBriefcase } from "react-icons/bs";
import { motion } from 'framer-motion';
import { fadeIn } from '../../Variants';

function More() {
  return (
    <div>
      <div className="mo">
       <span>More</span> <h2>Expertise</h2>
      </div>
      <div className="expert">
       <motion.div
        variants={fadeIn('up', 0.2)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once: false, amount: 0.7}}
       className="expo">
        <BsBriefcase/>
        <h2>Labour and Employment</h2>
        <h1>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</h1>
        <a href="/">Learn More</a>
       </motion.div>
        <div className="expo">
        <BsBriefcase/>
        <h2>Corporate & Civil Litigation</h2>
        <h1>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</h1>
        <a href="/">Learn More</a>
       </div>
        <div className="expo">
        <BsBriefcase/>
        <h2>LIntellectual Proerty Law</h2>
        <h1>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</h1>
        <a href="/">Learn More</a>
       </div>
         <div className="expo">
        <BsBriefcase/>
        <h2>Criminal Prosecution and Defense</h2>
        <h1>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</h1>
        <a href="/">Learn More</a>
       </div>
          <div className="expo">
        <BsBriefcase/>
        <h2>Marital Law</h2>
        <h1>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</h1>
        <a href="/">Learn More</a>
       </div>
        <div className="expo">
        <BsBriefcase/>
        <h2>Political Law</h2>
        <h1>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</h1>
        <a href="/">Learn More</a>
       </div>
      </div>
    </div>
  )
}

export default More
