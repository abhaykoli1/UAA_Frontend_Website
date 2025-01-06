import React from "react";
import { motion } from "framer-motion";
import Logo from "../../assets/logo.png";

function Hero() {
  return (
    <div className="con px-4 sm:px-10 mx-auto py-8 text-white grid grid-cols-1 md:grid-cols-[600px_1fr] gap-8 items-center">
      <div className="z-10">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-[90px] font-bold mb-6 sm:mb-10"
          initial={{ x: -100, opacity: 0 }} // Start from the left and invisible
          animate={{ x: 0, opacity: 1 }} // Move to original position and become visible
          transition={{ duration: 0.8, ease: "easeOut" }} // Adjust the speed
        >
          Hire the best freelancers for any job, online.
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg lg:text-2xl text-white mb-4 sm:mb-6"
          initial={{ x: -100, opacity: 0 }} // Start from the left and invisible
          animate={{ x: 0, opacity: 1 }} // Move to original position and become visible
          transition={{ duration: 1, ease: "easeOut" }} // Slower animation for the description
        >
          World's largest freelance marketplace. Any job you can possibly think
          of. Save up to 90% & get quotes for free. Pay only when you're 100%
          happy.
        </motion.p>

        <motion.button
          className="bg-indigo-600 mr-4 sm:mr-5 hover:bg-indigo-700 text-white font-semibold transition duration-500 py-2 px-4 sm:px-6 rounded mb-4 sm:mb-0"
          initial={{ x: -100, opacity: 0 }} // Start from the left and invisible
          animate={{ x: 0, opacity: 1 }} // Move to original position and become visible
          transition={{ duration: 0.8, ease: "easeIn" }} // Slowest animation for the button
        >
          Hire Freelancers
        </motion.button>

        <button className="bg-transparent border border-gray-400 font-semibold py-2 px-4 sm:px-6 rounded transition duration-500 hover:bg-white hover:text-indigo-700">
          Earn money Freelancing
        </button>
      </div>
      <div className="flex justify-center items-center">
        {/* <img
          src={Logo}
          alt="logo"
          className=" object-contain  md:absolute absolute right-10  top-5 z-0"
        /> */}
      </div>
    </div>
  );
}

export default Hero;
