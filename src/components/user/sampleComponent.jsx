import React from "react";
import { useNavigate } from "react-router-dom";

const SampleComponent = ({ card }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/sample/${card.id}`); // Pass dynamic ID
  };

  return (
    <div className="relative mb-4 hover:scale-105 duration-500 border-pink-500 border rounded-lg">
      <div className="absolute top-[10px] left-[10px] text-[#14a4f5] px-[10px] py-[5px] rounded-lg bg-white">
        {card.absoluteTitle}
      </div>
      <img
        src={"https://picsum.photos/300/200"}
        className="w-full rounded-t-lg"
      />
      <div className="p-6 bg-gradient-to-b from-[#02fbd112] rounded-b-lg to-[#fdfdfd]">
        <h4 className="text-black font-bold px-0 py-2 rounded whitespace-nowrap overflow-hidden text-ellipsis max-w-[80%]">
          {card.title}
        </h4>
        <p className="text-black-50">{card.description}</p>
        <button
          onClick={handleButtonClick}
          className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default SampleComponent;
