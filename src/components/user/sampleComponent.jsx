import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllSamples } from "../../api/apiSample"; // Adjust the import path as needed
import { Helmet } from "react-helmet";

const SampleComponent = ({ sample, key }) => {
  console.log(sample);
  const navigate = useNavigate();

  const handleButtonClick = (seo_title) => {
    console.log(seo_title);
    navigate(`/sample/${seo_title}`); // Navigate with dynamic ID
  };

  console.log("sample : ", sample.seo_title);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div
      key={key}
      className="relative mb-4 flex flex-col justify-between hover:shadow-lg hover:scale-[101.5%] duration-500 border-gray-300 border rounded-lg"
    >
      <div className="relative ">
        <div className="max-h-[350px] h-full overflow-hidden">
          <img
            src={sample.file}
            title={sample.moduleName}
            alt={sample.moduleName}
            className="w-ful  rounded--lg mt-[45px]"
          />
        </div>
        <h2 className=" absolute top-0 w-full px-3 border-b text-xl font-bold py-2 rounded-t rounded-tr-[7px] whitespace-nowrap overflow-hidden text-ellipsis bg-gradient-to-r  from-[#02fbd112] via-[#02fbd112] to-[#fdfdfd] text-main">
          {sample.moduleCode}
        </h2>
      </div>
      <div className="px-4 py-2 cursor-default flex flex-col  bg-gradient-to-b border-t from-[#02fbd112] rounded-b-lg to-[#fdfdfd]">
        <div className="flex justify-between items-center gap-3">
          <h2 className=" text-black  px-0 text-2xl font-bold  rounded whitespace-nowrap overflow-hidden text-ellipsis ">
            {sample.moduleName}
          </h2>
          <button
            onClick={() => {
              goTop();
              handleButtonClick(sample?.seo_title);
            }}
            className=" px-4 py-2 !max-w bg-main text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            More
          </button>
        </div>
        <h4 className="text-secondary text-gray-500 mt-1 mb-2 ">
          Pages: {sample.pageCount} | Word Count: {sample.wordcount}
        </h4>
      </div>
    </div>
  );
};

export default SampleComponent;
