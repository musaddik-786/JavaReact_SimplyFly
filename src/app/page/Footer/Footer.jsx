
import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Airline Reservation System</h4>
        <p>Seamless travel planning and adventuring...</p>
      </div>
      <div className="footer-links">
        <div>
          <h5>About Us</h5>
          <ul>
            <li><a href="#">Link 1</a></li>
          </ul>
        </div>
        <div>
          <h5>Contact Us</h5>
          <ul>
            <li><a href="#">Link 1</a></li>
          </ul>
        </div>
        <div>
          <h5>Careers</h5>
          <ul>
            <li><a href="#">Link 1</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>2024</p>
        <a href="#">Login here</a>
      </div>
    </footer>
  );
};

export default Footer;
