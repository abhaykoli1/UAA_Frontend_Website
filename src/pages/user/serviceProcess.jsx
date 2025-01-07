import React from "react";
import {
  FaUserGraduate,
  FaPhone,
  FaClipboard,
  FaDollarSign,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaUserGraduate size={50} />,
    title: "Try UAA Expert Study Abroad Counseling Services!",
    description:
      "Experience professional guidance for your study abroad plans.",
  },
  {
    id: 2,
    icon: <FaPhone size={50} />,
    title: "Contact Team",
    description: "Connect with our BD executive for further assistance.",
  },
  {
    id: 3,
    icon: <FaClipboard size={50} />,
    title: "Assignment Details",
    description: "Share all your assignment details with the executive.",
  },
  {
    id: 4,
    icon: <FaDollarSign size={50} />,
    title: "Payment",
    description: "Make the partial or full payment to book your order.",
  },
  {
    id: 5,
    icon: <FaCheckCircle size={50} />,
    title: "Complete Assignment",
    description: "Receive your completed assignment from us on time.",
  },
];

const ServicesProcess = () => {
  return (
    <div className="bg-black p-6 min-h-screen pt-32 flex flex-col items-center">
      <h1 className="font-bold text-white mb-20 text-2xl sm:text-3xl lg:text-4xl">
        Services Process
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-10">
        {steps.map((step) => (
          <div
            key={step.id}
            className="shadow-md rounded-lg p-6 flex flex-col items-center text-center"
          >
            <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-5">
              {step.icon}
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-pink-500">
              {step.title}
            </h2>
            <p className="text-white text-sm sm:text-md mt-2">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesProcess;
