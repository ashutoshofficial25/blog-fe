import React from "react";

const IconButton = ({ image }) => {
  return (
    <button className="bg-gray-200 h-12 border border-gray-700 px-2 ">
      <img src={image} alt={image} />
    </button>
  );
};

export default IconButton;
