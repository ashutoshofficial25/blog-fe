import React from "react";

const IconButton = ({ image }) => {
  return (
    <button className="bg-gray-200 h-12">
      <img src={image} alt={image} />
    </button>
  );
};

export default IconButton;
