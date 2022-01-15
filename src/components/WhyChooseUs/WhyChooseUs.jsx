import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <div className="whyChooseUs">
      <div className="left">
        <div>
          <img src="images/videobtn.png" alt="" />
        </div>
        <div>
          <h1>Why Choose Code Partner?</h1>
        </div>
        <div>
          <p>
            So how does it work? Let’s check our Getting Started tutorial for
            detailed info.
          </p>
        </div>
        <div>
          <ul>
            <li>
              <span>
                <img src="images/tick.png" alt="" />
              </span>{" "}
              <p>
                Provides professional service with ease and single point of
                contact.
              </p>
            </li>
            <li>
              <span>
                <img src="images/tick.png" alt="" />
              </span>
              <p>Takes complete responsibility from start to end.</p>
            </li>
            <li>
              <span>
                <img src="images/tick.png" alt="" />
              </span>{" "}
              <p>Dedicated Relationship Manager in place.</p>
            </li>
          </ul>
        </div>
        <div>
          <button className="point" >Consult with an exprt now!</button>
        </div>
      </div>
      <div className="right">
        <img src="images/ylady.png" alt="" />
      </div>
    </div>
  );
};

export default WhyChooseUs;
