import React from "react";
import "./WhatWeDo.css";
import { wwd } from "./wwd";

const WhatWeDo = () => {
  return (
    <div className="whatWeDo">
      {wwd.map((e, i) => (
        <div key={i}>
          <img src={e.icon} alt="" />
          <h1>{e.name}</h1>
          <p>{e.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WhatWeDo;
