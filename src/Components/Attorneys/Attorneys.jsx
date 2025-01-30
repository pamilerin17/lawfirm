// import React from 'react'
import './Attorneys.css';
import Team from '../../assets/team-2.jpg';

function Attorneys() {
  return (
    <div className="attorneys-container">
      <div className="att-header">
        <h2>Our Expert Attorneys</h2>
      </div>
      <div className="att-grid">
        {[...Array(8)].map((_, index) => (
          <div className="att-card" key={index}>
            <img src={Team} alt="Attorney" />
            <h1>John Doe</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, laboriosam pariatur.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Attorneys;
