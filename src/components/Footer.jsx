import React from "react";
import "../styles/global.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li>Support Center</li>
            <li>Customer Support</li>
            <li>About Us</li>
            <li>Copyright</li>
            <li>Popular Campaign</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Our Information</h3>
          <ul>
            <li>Return Policy</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Site Map</li>
            <li>Store Hours</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>My Account</h3>
          <ul>
            <li>Press inquiries</li>
            <li>Social media</li>
            <li>directories</li>
            <li>Images & B-roll</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Policy</h3>
          <ul>
            <li>Application security</li>
            <li>Software principles</li>
            <li>Unwanted software policy</li>
            <li>Responsible supply chain</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
