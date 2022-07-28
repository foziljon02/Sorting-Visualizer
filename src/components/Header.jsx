import React from "react";
import CustomButton from "./CustomButton";

const Header = ({ resetArray }) => {
  return (
    <header>
      <h1 className="text-[28px] font-bold text-center">Sorting Visualizer</h1>

      <div className="flex gap-3 mb-2">
        <CustomButton clickHandler={resetArray}>Reset Array</CustomButton>
        <CustomButton>Bubble Sort</CustomButton>
      </div>
    </header>
  );
};

export default Header;
