import React, { useEffect, useState } from "react";
import { getAllServices } from "../../api/apiServices";

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getAllServices();
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  return (
    <div>
      <h1>Service List</h1>
      {services.map((service, index) => (
        <div key={index}>
          <h2>{service.service.title}</h2>
          <p>{service.service.shortDec}</p>
          <p>SEO Title: {service.seo_title}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
