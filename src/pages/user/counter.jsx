import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Counter() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  // Array of counters' target values and titles
  const counters = [
    { target: 1000, title: "Counter 1" },
    { target: 1500, title: "Counter 2" },
    { target: 2000, title: "Counter 3" },
    { target: 2500, title: "Counter 4" },
  ];

  // Function to animate the counter
  const incrementCounter = (index, target) => {
    let current = 0;
    const interval = setInterval(() => {
      if (current >= target) {
        clearInterval(interval);
      } else {
        current += Math.ceil(target / 100); // Increment smoothly
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = current; // Update specific counter
          return newCounts;
        });
      }
    }, 20); // Controls the speed of the animation
  };

  useEffect(() => {
    // Call incrementCounter for each counter
    counters.forEach((counter, index) => {
      incrementCounter(index, counter.target);
    });
  }, []);

  return (
    <div className="container mx-auto py-16 text-center text-white px-10">
      <h1 className=" font-bold text-white my-14 "> Our Dynamic Counters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
        {counters.map((counter, index) => (
          <motion.div
            key={index}
            className="p-8  border-[0.5px] border-gray-500  rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-semibold mb-4">{counter.title}</h2>
            <p className="text-4xl font-bold text-pink-500">{counts[index]}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Counter;
