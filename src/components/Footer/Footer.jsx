import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="ftop">
        <div className="c1">
          <img className="point" src="images/logo2.png" alt="" />
        </div>
        <div className="c2">
          <h3>Links</h3>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Press Release</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="c3">
          <h3>Legal</h3>
          <ul>
            <li>Terms of use</li>
            <li>Terms & conditions</li>
            <li>Privacy policy</li>
            <li>Cookie policy</li>
          </ul>
        </div>
        <div className="c4">
          <h3>Newslettert</h3>
          <h5>
            Join over <u>68,000</u> people getting our emails
          </h5>
          <div className="email">
            <input type="text" placeholder="Enter Your Email" />
            <button>Sign Up</button>
          </div>
          <p>We only send interesting and relevant emails.</p>
        </div>
      </div>
      <div className="fbottom">
        <div className="fl">
          <ul>
            <li>Privacy & Terms.</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="fc">
          <p>* Copyright @2021 Code PartnerIT Solutions Pvt. Ltd.</p>
        </div>
        <div className="fr">
          <ul>
            <li>
              <img src="images/facebook.png" alt="" />
            </li>
            <li>
              <img src="images/twitter.png" alt="" />
            </li>
            <li>
              <img src="images/linkedin.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
