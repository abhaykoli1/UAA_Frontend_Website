import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            className={`accordion-header w-full text-left py-2 px-4 font-bold rounded ${
              activeIndex === index
                ? "bg-blue-400 hover:bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => handleToggle(index)}
          >
            {item.title}
          </button>
          {activeIndex === index && (
            <div className="accordion-body bg-gray-100 p-4">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
