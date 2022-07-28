import React from "react";

const CustomButton = ({ className, children, clickHandler }) => {
  return (
    <button className={`btn ${className}`} onClick={clickHandler}>
      {children}
    </button>
  );
};

export default CustomButton;
