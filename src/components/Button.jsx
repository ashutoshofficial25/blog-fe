import React from "react";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  onClick,
  ...props
}) => {
  return (
    <button
      onClick={onclick}
      type={type}
      className={`px-4 py-2 rounded-lg text-black bg-${variant}-500 hover:bg-${variant}-600`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
