import React, { useState } from "react";

const HamburgerIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative w-8 h-8 focus:outline-none bg-transparent focus:border-none"
    >
      <div
        className={`absolute  left-0 w-full h-[5px] bg-white rounded  transform transition-transform duration-300 ${
          isOpen ? "rotate-45 translate-y-0 top-1/2" : "-translate-y-2 top-3"
        }`}
      />
      <div
        className={`absolute top-1/2 left-0 w-full h-[5px] bg-white rounded  transform transition-opacity duration-300 ${
          isOpen ? "opacity-0 " : "opacity-100"
        }`}
      />
      <div
        className={`absolute  left-0 w-full h-[5px] bg-white rounded  transform transition-transform duration-300 ${
          isOpen
            ? "-rotate-45 translate-y-0 top-1/2"
            : "translate-y-2 top-[18px]"
        }`}
      />
    </button>
  );
};

export default HamburgerIcon;
