import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo point">
        <img src="images/Logo.png" alt="" />
      </div>
      <div className="menu">
        <ul>
          <li>About</li>
          <li>Case Studies</li>
          <li>Services</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="search">
        <div>
          <img src="images/search.png" alt="" />
        </div>
        <div>
          <input type="text" placeholder="Search Here..." />
        </div>
      </div>
      <div className="login">
        <div className="loginIcon">
          <img src="images/path823.png" alt="" />
        </div>
        <div>
          <ul>
            <li className='point' >Login</li>
          </ul>
        </div>
      </div>
      <div className="nav point">
        <img src="images/Nav.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
