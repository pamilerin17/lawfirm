// import React from 'react'
import './Happy.css'
import Person from '../../assets/team-2.jpg'
import { motion } from 'framer-motion';
function Happy() {
  return (
    <div>
      <div className="hap">
       <span>Happy</span> <h2>Clients</h2>
      </div>
      <motion.div whileInView={{ opacity: 1 }} />
       <div className="cli1">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod magnam cumque similique amet dolores, assumenda id quae, veritatis eum repellendus optio suscipit ad ratione iure? Impedit quis necessitatibus facilis ipsam!</p>
        <img src={Person} alt="" />
        <h1>John Doe</h1>

      </div>

       <div className="cli1">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod magnam cumque similique amet dolores, assumenda id quae, veritatis eum repellendus optio suscipit ad ratione iure? Impedit quis necessitatibus facilis ipsam!</p>
        <img src={Person} alt="" />
        <h1>John Doe</h1>

      </div>

       <div className="cli1">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod magnam cumque similique amet dolores, assumenda id quae, veritatis eum repellendus optio suscipit ad ratione iure? Impedit quis necessitatibus facilis ipsam!</p>
        <img src={Person} alt="" />
        <h1>John Doe</h1>

      </div>
    </div>
  )
}

export default Happy
