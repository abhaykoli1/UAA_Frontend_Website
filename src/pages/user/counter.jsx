import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Counter() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const counters = [
    { target: 10560, title: "Project" },
    { target: 15060, title: "Member" },
    { target: 22195, title: "Love Us" },
    { target: 11388, title: "Happy Client" },
  ];

  const incrementCounter = (index, target) => {
    let current = 0;
    const interval = setInterval(() => {
      if (current >= target) {
        clearInterval(interval);
      } else {
        current += Math.ceil(target / 100);
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = current;
          return newCounts;
        });
      }
    }, 20);
  };

  useEffect(() => {
    21;
    counters.forEach((counter, index) => {
      incrementCounter(index, counter.target);
    });
  }, []);

  return (
    <div className="lg:container mx-auto py-16 lg:px-5 px-5 text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
        {counters.map((counter, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-gray-200/50 via-gray-100/55 to-white hover:from-purple-200/40 hover:via-purple-300/50 hover:to-white shado hover:shadow-xl hover:!scale-[105%] transition-all duration-500 cursor-pointer rounded-lg p-4 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-lg font-semibold mb-4 text-black tracking-wide uppercase">
              {counter.title}
            </h2>
            <p className="text-4xl font-bold text-main drop-shadow-lg">
              {counts[index]}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Counter;
