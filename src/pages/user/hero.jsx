import "react";
import { motion } from "framer-motion";
import hero from "../../assets/image/Home.jpg";
function Hero() {
  return (
    <div className="mt- text-white">
      <div className="relative">
        <img src={hero} alt="home image" />
        <motion.button
          className="bg-indigo-600 mx-10 uppercase  mt-10   mr-4 sm:mr-5 hover:bg-indigo-700 text-white font-semibold transition duration-500 lg:py-3 md:py-2 py-1 lg:px-4 md:px-4 px-3  rounded mb-4 sm:mb-0"
          initial={{ x: -100, opacity: 0 }} // Start from the left and invisible
          animate={{ x: 0, opacity: 1 }} // Move to original position and become visible
          transition={{ duration: 0.8, ease: "easeIn" }} // Slowest animation for the button
        >
          Book consultancy
        </motion.button>
      </div>
    </div>
  );
}

export default Hero;
