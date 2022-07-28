import React from "react";
import { WIDTH } from "helpers/globals";

const Bars = ({ data }) => {
  const bars = data.map((bar) => {
    return (
      <div className="bar" style={{ height: bar + "px", width: WIDTH }}></div>
    );
  });

  return <div className="bars">{bars}</div>;
};

export default Bars;
