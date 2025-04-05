import React, { useEffect, useState } from "react";
import ServicesComponent from "../../components/user/ServicesComponent";
import { getAllServices } from "../../api/apiServices";
import { Helmet } from "react-helmet";

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
    <section className="bg-gradient-to-br from-blue-100/50 to-white w-full">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Services | Uni Academic Assistance </title>
        <meta
          name="description"
          content="This is the description of my page."
        />
        <link
          rel="canonical"
          href="https://uniacademicassistance.in/services"
        />
      </Helmet>{" "}
      <div className="mx-auto lg: Services">
        <div className="px-10 pt-10 pb- text-center">
          <h1 className="font-bold text-5xl pt-7 pb-4 uppercase bg-gradient-to-r from-main to-pink-500 bg-clip-text text-transparent">
            Our Services
          </h1>{" "}
          <p className="text-lg line-clamp-4">
            Comprehensive Assignment Assistance With a No-AI Guarantee!
          </p>
        </div>
        <div className="pb-14 lg:px-10 md:px-8 px-5">
          <h2 className="font-bold py-7 text-4xl text-white mx-10 border-b border-gray-400">
            {/* All Services */}
          </h2>
          <div className="grid px-10 gap-8  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-10">
            {services.map((item) => (
              <ServicesComponent item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
