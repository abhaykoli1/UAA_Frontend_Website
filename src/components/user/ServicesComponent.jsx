import React, { useState } from "react";
import ButtonComponent from "./buttonComponent";
import { useNavigate, useParams } from "react-router-dom";
import web from "../../assets/icons/web.png";
import { getServiceByTitle } from "../../api/apiServices";
import { Helmet } from "react-helmet";

const ServicesComponent = ({ item }) => {
  const handleService = (seoTitle) => {
    navigate(`/service/${seoTitle}`);
    console.log("SEO Title:", seoTitle);
  };

  console.log(item.service);
  const navigate = useNavigate();

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div
      id="Services"
      className="relative w-full cursor-pointer rounded-2xl  border border-gray-150  backdrop-blur-md  transition-all duration-500 hover:scale-[103%] hover:shadow-2xl hover:bg-white"
      onClick={() => {
        goTop();
        handleService(item.seo_title);
      }}
    >
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-200 opacity-0 transition-opacity duration-300 hover:opacity-30"></div>

      <div
        key={item.service.id}
        className="flex flex-col items-cente p-5  relative z-10"
      >
        {/* Icon Section with Glow Effect */}
        <div className="flex items-center gap-5">
          <div className=" rounded-full bg-white shadow-lg transition-all duration-300 shadow-purple-300 ">
            <img
              src={item.service.icon}
              alt={item.service.title}
              className="w-16 h-16 rounded-full"
            />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 truncate">
            {item.service.title}
          </h3>
        </div>

        {/* Text Section */}
        <div className="mt-5">
          <p className="text-gray-600 mt-2 text-lg leading-relaxed">
            {item.service.shortDec.split(" ").slice(0, 25).join(" ")}...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
