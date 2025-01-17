import React, { useState } from "react";
import ButtonComponent from "./buttonComponent";
import { useNavigate, useParams } from "react-router-dom";
import web from "../../assets/icons/web.png";
import { getServiceByTitle } from "../../api/apiServices";

const ServicesComponent = ({ item }) => {
  const handleService = (seoTitle) => {
    navigate(`/service/${seoTitle}`);
    console.log("SEO Title:", seoTitle);
  };

  const navigate = useNavigate();

  return (
    <div
      id="Services"
      className=" w-full hover:shadow-2xl border hover:scale-105  rounded-2xl  bg-white transition duration-300"
      onClick={() => handleService(item.seo_title)}
    >
      <div key={item.service.id} className="flex items-center p-10">
        <div>
          <img src={web} alt={item.service.title} className="w-16 h-16" />
          <div className="mt-10 ">
            <h3 className="text-3xl font-bold text-gray-800">
              {item.service.title}
            </h3>
            <p className="text-gray-600 mt-2 text-xl">
              {item.service.description.split(" ").slice(0, 30).join(" ")}...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
