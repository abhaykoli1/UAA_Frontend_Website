import "react";
import { motion } from "framer-motion";
import hero from "../../assets/image/Home.jpg";
function Hero() {
  return (
    <div className=" text-white">
      <div className="relative">
        <img src={hero} alt="home image" />
        <motion.button
          className="bg-indigo-600 mx-10    mr-4 sm:mr-5 hover:bg-indigo-700 text-white font-semibold transition duration-500 py-2 px-4 sm:px-6 rounded mb-4 sm:mb-0"
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
    </div>
  );
}

export default Hero;
