import React from "react";
import { cp } from "./cp";
import "./OurNews.css";

const OurNews = () => {
  return (
    <div className="ourNews">
      <div className="news">
        <div>
          <h4>NEWS</h4>
        </div>
        <div>
          <h1>Our Partners.</h1>
        </div>
      </div>
      <div className="cp">
        <div>
          <h4>Cloud partners</h4>
          <div className="cps">
            {cp.map((e, i) => (
              <div key={i} >
                <img src={`images/${e}.png`} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bp">
        <div>
          <h4>Blockchain partners</h4>
          <div><img src="images/opartner.png" alt=""/></div>
        </div>
      </div>
    </div>
  );
};

export default OurNews;
