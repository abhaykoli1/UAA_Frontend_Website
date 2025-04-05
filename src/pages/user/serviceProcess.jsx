import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  FaUserGraduate,
  FaPhone,
  FaClipboard,
  FaDollarSign,
  FaCheckCircle,
} from "react-icons/fa";
import {
  faUserGraduate,
  faPhone,
  faClipboard,
  faDollarSign,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const steps = [
  {
    id: 1,
    icon: faUserGraduate,
    title: "UAA Abroad Counseling!",
    description:
      "Experience professional guidance for your study abroad plans.",
  },
  {
    id: 2,
    icon: faPhone,
    title: "Contact Team",
    description: "Connect with our BD executive for further assistance.",
  },
  {
    id: 3,
    icon: faClipboard,
    title: "Assignment Details",
    description: "Share all your assignment details with the executive.",
  },
  {
    id: 4,
    icon: faDollarSign,
    title: "Payment",
    description: "Make the partial or full payment to book your order.",
  },
  {
    id: 5,
    icon: faCheckCircle,
    title: "Complete Assignment",
    description: "Receive your completed assignment from us on time.",
  },
];

const ServicesProcess = () => {
  return (
    <section className="mx-auto lg:container lg:px-0 pt-10 flex flex-col items-center">
      <h1 className="font-bold  text-2xl sm:text-3xl lg:text-4xl pt-7 pb-4 text-center uppercase bg-gradient-to-r from-main to-pink-500 bg-clip-text text-transparent">
        Process
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-4 sm:px-8 lg:px-10">
        {steps.map((step) => (
          <div
            key={step.id}
            className="hover:shadow-2xl hover:scale-[104%] duration-500 transition-all cursor-pointer rounded-lg p-6 flex flex-col items-center text-center"
          >
            <div className="bg-blue-100 h-24 w-24 text-blue-600  flex items-center justify-center rounded-full mb-5">
              <FontAwesomeIcon
                icon={step.icon}
                fade
                className="h-12 p-3 text-main"
              />
              {/* {step.icon} */}
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-main">
              {step.title}
            </h2>
            <p className=" text-sm sm:text-md mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesProcess;
