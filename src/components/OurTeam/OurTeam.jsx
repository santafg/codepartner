import React from "react";
import { ot } from "./ot";
import "./OurTeam.css";

const OurTeam = () => {
  return (
    <div className="ourTeam">
      <div className="top">
        <h1>Our Core Team Players.</h1>
      </div>
      <div className="bottom">
        <ul>
          {ot.map((e, i) => (
            <li key={i}>
              <div>
                <img src={e.pic} alt="" />
              </div>
              <div>
                <h4>{e.name}</h4>
              </div>
              <div>
                <p>{e.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurTeam;
