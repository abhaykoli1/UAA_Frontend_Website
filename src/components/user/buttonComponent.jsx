import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonComponent = ({ btnText }) => {
  return (
    <div className="my-5">
      <button className="bg-indigo-600 mr-4 sm:mr-5 hover:bg-indigo-700 text-white font-semibold transition duration-500 py-2 px-4 sm:px-6 rounded mb-4 sm:mb-0">
        {btnText}
      </button>
    </div>
  );
};

export default ButtonComponent;
