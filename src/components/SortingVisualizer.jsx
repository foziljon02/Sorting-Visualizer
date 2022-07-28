import React, { useState, useEffect } from "react";
import { generateArray } from "../helpers/globals";
import Bars from "./Bars";
import Header from "./Header";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  const resetArray = () => {
    setArray(generateArray());
  };

  useEffect(() => {
    resetArray();
  }, []);

  return (
    <div className="sorting-visualizer">
      <Header resetArray={resetArray} />
      <Bars data={array} />
    </div>
  );
};

export default SortingVisualizer;
