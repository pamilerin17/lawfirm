// import React from 'react'
import './Text.css';

function Text() {
  return (
    <div className="form-container">
      <div className="input-box">
        <input type="text" placeholder="Full Name" className="form-input" />
        <input type="email" placeholder="Email" required className="form-input" />
        <input type="tel" placeholder="Phone Number" required className="form-input" />
        <input type="text" placeholder="Preferred Time" required className="form-input" />
        <input type="number" placeholder="Number of People" required className="form-input" />
      </div>
      <textarea placeholder="Your Message" required className="form-textarea"></textarea>
      <input type="submit" value="Send Message" className="btn" />
    </div>
  );
}

export default Text;
