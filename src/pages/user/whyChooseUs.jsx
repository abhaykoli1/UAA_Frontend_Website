import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // FaPhoneAlt for call, FaEnvelope for message (email)

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-b bg-white text-black rounded-md mb-3">
      <div
        className="p-4 cursor-pointer border-b rounded-md"
        onClick={onToggle}
      >
        <h3>{title}</h3>
      </div>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

const WhyChooseUS = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-10 sm:px-10 mx-auto mt-10">
      <div className="grid lg:grid-cols-[450px_1fr] md:grid-cols-[450px_1fr] grid-cols-1 gap-10">
        <div>
          <h1 className="font-bold">Why Choose Us</h1>
          <p>
            Yes, relying too heavily on an online essay sample can be risky.
            Students may unintentionally mimic the structure or content of a
            sample without.
          </p>

          <div className="text-center mt-10">
            <img
              src="https://picsum.photos/500/200"
              className="mb-5 rounded-lg"
            />
            <h2 className="font-bold text-3xl pb-3">Need Support?</h2>
            {/* <p>
              Feugiat sed lectus vestibulum mattis fusce ut placerat orci
              ullamcorper velit. Contact Us
            </p> */}
            <div className="flex gap-5 justify-center mt-6">
              <button className="bg-green-500 w-28">
                <div className="flex items-center flex-col">
                  <FaPhoneAlt size={24} className="text-white" />
                  <p className="ml-2">Call</p>
                </div>
              </button>
              <button className="bg-orange-500 w-28">
                <div className="flex items-center flex-col">
                  <FaEnvelope size={24} className="text-white" />
                  <p className="ml-2">Message</p>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full mx-auto ">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                isOpen={index === openIndex}
                onToggle={() => handleToggle(index)}
              >
                {item.content}
              </AccordionItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUS;
