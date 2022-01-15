import React, { useState } from "react";
import "./Header.css";

const MobileHeader = () => {
  const [open, setopen] = useState(false);
  return (
    <>
      <div className="mheader">
        <div className="logo">
          <img src="images/Logo.png" alt="" />
        </div>
        <div className="mnav">
          <div className="mlogin">
            <div className="loginIcon">
              <img src="images/path823.png" alt="" />
            </div>
            <div>
              <ul>
                <li className="point">Login</li>
              </ul>
            </div>
          </div>
          <div>
            <img onClick={() => setopen(!open)} src="images/Nav.png" alt="" />
          </div>
        </div>
        <div className={open ? "sidenav open" : "sidenav"}>
          <ul>
            <li>About</li>
            <li>Case Studies</li>
            <li>Services</li>
            <li>Blog</li>
            <li>
              <input type="text" placeholder="Search Here..." />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
