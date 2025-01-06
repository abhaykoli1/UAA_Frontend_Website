import React, { useEffect, useState } from "react";
import web from "../../assets/icons/web.png";
import branding from "../../assets/icons/branding.png";
import crm from "../../assets/icons/crm.png";
import digital from "../../assets/icons/digital.png";
import mobile from "../../assets/icons/mobile.png";
import saas from "../../assets/icons/saas.png";
import ServicesComponent from "../../components/user/ServicesComponent";
import { getAllServices } from "../../api/apiServices";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getAllServices();
        console.log(response.data);
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  return (
    <section className="Services">
      <div className=" px-10 pt-10 text-center">
        <h1 className="font-bold text-6xl py-7">Our Services</h1>
        <p className="text-lg line-clamp-4">
          Comprehensive Assignment Assistance With a No-AI Guarantee!
        </p>
      </div>
      <div className="pt-12">
        <h2 className="font-bold py-7 text-4xl text-white mx-10 border-b border-gray-400">
          All Services
        </h2>
        <div className="grid px-10 gap-8  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-10">
          {services.map((item) => (
            <ServicesComponent item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
