import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="left">
        <div className="heading">
          <h1>Smart Consulting Group.</h1>
        </div>
        <div className="subtitle">
          <div>
            <p>
              We helping client to create technology that uses Blockchain, AI
              and IOT with our talented expert.
            </p>
          </div>
        </div>
        <div>
          <button className="point">Consult with an exprt now!</button>
        </div>
        <div>
          <p className="point">
            Already a member? <b>Sign in.</b>
          </p>
        </div>
      </div>
      <div className="right">
        <img src="images/Right.png" alt="" />
      </div>
      <div className="outside">
        <div className="number">
          <p>01.</p>
        </div>
        <div className="socialMedia">
          <ul>
            <li>Fb.</li>
            <li>Tw.</li>
            <li>Inst.</li>
          </ul>
        </div>
        <div className="support point" >
          <img src="images/support.png" alt=""/>
        </div>
        <div className="scroll" >
          <img src="images/bbline.png" alt=""/>
          <p>SCROLL</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
