import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // FaPhoneAlt for call, FaEnvelope for message (email)
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import { useRef, useEffect } from "react";

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="border-b bg-white text-black rounded-md mb-3">
      <div
        className="p-4 font-bold text-lg cursor-pointer border-b rounded-md flex items-center justify-between"
        onClick={onToggle}
      >
        <h3>{title}</h3>
        <span>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
      </div>
      <div
        ref={contentRef}
        style={{
          maxHeight: height,
          overflow: "hidden",
          transition: "max-height 0.4s ease-out",
        }}
        className={`px-4 transition-all duration-500 ${
          isOpen ? "py-3" : "py-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

const WhyChooseUS = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 sm:px-8 mx-auto mt-10">
      <div className="grid lg:grid-cols-[450px_1fr] md:grid-cols-[450px_1fr] grid-cols-1 gap-10">
        <div>
          <h1 className="font-bold text-2xl sm:text-3xl mb-4">Why Choose Us</h1>
          <p className="text-base sm:text-lg mb-6">
            Yes, relying too heavily on an online essay sample can be risky.
            Students may unintentionally mimic the structure or content of a
            sample without understanding the underlying concepts.
          </p>

          <div className="text-center mt-10">
            <img
              src="https://picsum.photos/500/200"
              className="mb-5 rounded-lg w-full h-auto"
              alt="support image"
            />
            <h2 className="font-bold text-xl sm:text-2xl pb-3">
              Need Support?
            </h2>
            <div className="flex gap-4 justify-center mt-6">
              <button className="bg-green-500 w-28 sm:w-32 py-2 rounded-lg">
                <div className="flex items-center flex-col">
                  <FaPhoneAlt size={24} className="text-white" />
                  <p className="text-white">Call</p>
                </div>
              </button>
              <button className="bg-orange-500 w-28 sm:w-32 py-2 rounded-lg">
                <div className="flex items-center flex-col">
                  <FaEnvelope size={24} className="text-white" />
                  <p className="text-white">Message</p>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full mx-auto shadow-xl">
            {items.map((item, index) => (
              <AccordionItem
                className="font-bold"
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
