import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllSamples } from "../../api/apiSample"; // Adjust the import path as needed
import { Helmet } from "react-helmet";

const SampleComponent = ({ sample }) => {
  const navigate = useNavigate();

  const handleButtonClick = (seo_title) => {
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
      key={sample.sample._id}
      className="relative mb-4 flex flex-col justify-between hover:shadow-lg hover:scale-[101.5%] duration-500 border-main border rounded-lg"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>UAA Samples</title>
        <meta name="description" content={sample.seo_description} />
        <link
          rel="canonical"
          href={`https://uniacademicassistance.in/blog/${sample.seo_title}`}
        />
      </Helmet>
      <img
        src={sample.sample.file}
        alt={sample.sample.moduleName}
        className="w-ful rounded-t-lg"
      />
      <div className="px-4 py-3 cursor-default flex flex-col  bg-gradient-to-b from-[#02fbd112] rounded-b-lg to-[#fdfdfd]">
        <div className="flex justify-between items-center gap-4">
          <h2 className="text-black text-2xl font-bold px-0 py-2 rounded whitespace-nowrap overflow-hidden text-ellipsis ">
            {sample.sample.moduleName}
          </h2>
          <button
            onClick={() => {
              goTop();
              handleButtonClick(sample.seo_title);
            }}
            className=" px-4 py-2 !max-w bg-main text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            More
          </button>
        </div>
        <h4 className="text-secondary text-gray-500 mt-2 mb-2 ">
          Pages: {sample.sample.pageCount} | Word Count:{" "}
          {sample.sample.wordcount}
        </h4>
      </div>
    </div>
  );
};

export default SampleComponent;
