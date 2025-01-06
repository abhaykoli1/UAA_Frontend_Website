import React from "react";
import web from "../../assets/icons/web.png";
import branding from "../../assets/icons/branding.png";
import crm from "../../assets/icons/crm.png";
import digital from "../../assets/icons/digital.png";
import mobile from "../../assets/icons/mobile.png";
import saas from "../../assets/icons/saas.png";

const features = [
  {
    title: "Web Application",
    description:
      "Our team specializes in crafting compelling brand identities that resonate with your audience.",
    icon: web, // Replace with an actual image/icon URL
  },
  {
    title: "SAAS Application",
    description:
      "Our team specializes in crafting compelling brand identities that resonate with your audience.",
    icon: saas, // Replace with an actual image/icon URL
  },
  {
    title: "Mobile Application",
    description:
      "Our team specializes in crafting compelling brand identities that resonate with your audience.",
    icon: mobile, // Replace with an actual image/icon URL
  },
  {
    title: "CRM Services",
    description:
      "Our team specializes in crafting compelling brand identities that resonate with your audience.",
    icon: crm, // Replace with an actual image/icon URL
  },
  {
    title: "Digital Marketing",
    description:
      "Our team specializes in crafting compelling brand identities that resonate with your audience.",
    icon: digital, // Replace with an actual image/icon URL
  },
  {
    title: "Branding",
    description:
      "Our team specializes in crafting compelling brand identities that resonate with your audience.",
    icon: branding, // Replace with an actual image/icon URL
  },
];

const WhyChooseUs = () => {
  return (
    <div id="Services" className="py-16 px-8  text-white">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-white my-20 ">
          Tailored Solutions for Your Needs
        </h2>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center p-10 bg-white hover:scale-105 shadow-lg rounded-2xl hover:shadow-xl transition duration-300"
          >
            <div>
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-16 h-16"
              />

              <div className="mt-10 ">
                <h3 className="text-3xl font-bold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mt-2 text-xl">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
