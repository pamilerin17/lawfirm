// import React from 'react'
// import { FaTwitter } from 'react-icons/fa'
// import { FaFacebook } from 'react-icons/fa'
// import { FaInstagram } from 'react-icons/fa'
// import { FaLinkedin } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import './Footer.css'
function Footer() {
  return (
    <div>
      <div className="footer">
       <div className="one">
        <span>Home</span>
        <h2>About Us</h2>
        <h2>Practice Area</h2>
        <h2>Services</h2>
        <h2>Attorney</h2>
        <h2>About Us</h2>
        <h2>Contact Us</h2>
        <h2>Terms & Privacy</h2>
       </div>
       <div className="two">
        <span>Practice Area</span>
        <h2>Banking Law</h2>
        <h2>Commercial Law</h2>
        <h2>Corporate Law</h2>
        <h2>Family Law</h2>
        <h2>Media Law</h2>
       </div>
       <div className="three">
        <span>Services</span>
        <h2>Labor Law</h2>
        <h2>Employment</h2>
        <h2>Property Law</h2>
        <h2>Prosecution</h2>
       </div>
       <div className="four">
        <span>Contact :</span>
        <p>123 Allen Avenue</p>
        <p>+234 678 0972 123</p>
        <p>info@lawfirm.com</p>
        {/* <p>Connect</p>  <FaFacebook/><FaLinkedin/><FaInstagram/><FaTwitter/> */}
         <p>Copyright <MdCopyright/>2025</p>
       </div>
      </div>

    </div>
  )
}

export default Footer
