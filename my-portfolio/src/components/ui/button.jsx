// my-portfolio/src/components/ui/button.jsx
import React from "react";

const Button = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
};

export { Button };
