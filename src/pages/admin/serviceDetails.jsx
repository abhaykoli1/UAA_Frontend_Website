import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getServiceByTitle } from "../../api/apiServices";

const ServiceDetails = () => {
  const { serviceTitle } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await getServiceByTitle(serviceTitle);
        setService(response.data);
      } catch (error) {
        console.error("Error fetching service:", error);
      }
    };
    fetchService();
  }, [serviceTitle]);

  if (!service) return <p>Loading...</p>;

  return (
    <div>
      <h1>{service.title}</h1>
      <p>{service.description}</p>
      <p>SEO Description: {service.seo_description}</p>
    </div>
  );
};

export default ServiceDetails;
