import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import config from "../../../../UAA_Admin_Panel/src/config";
import axios from "axios";

function Counter() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [counters, setCounters] = useState([]);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const fetchCounters = async () => {
    try {
      const response = await axios.get(`${config.API_URL}/get-all-counters`);
      setCounters(response.data.data);
    } catch (error) {
      console.error("Error fetching counters:", error);
    }
  };

  useEffect(() => {
    fetchCounters();
  }, []);

  useEffect(() => {
    if (isInView && counters.length > 0) {
      const targets = [
        counters[0]?.project || 0,
        counters[0]?.member || 0,
        counters[0]?.loveus || 0,
        counters[0]?.happyClient || 0,
      ];

      targets.forEach((target, index) => {
        let current = 0;
        const increment = Math.ceil(target / 100);
        const interval = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(interval);
          }
          setCounts((prev) => {
            const updated = [...prev];
            updated[index] = current;
            return updated;
          });
        }, 20);
      });
    }
  }, [isInView, counters]);

  return (
    <div
      ref={containerRef}
      className="lg:container mx-auto py-16 lg:px-5 px-5 text-center"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
        {["Project", "Member", "Love Us", "Happy Client"].map(
          (title, index) => (
            <motion.div
              key={title}
              className="bg-gradient-to-br from-gray-200/50 via-gray-100/55 to-white hover:from-purple-200/40 hover:via-purple-300/50 hover:to-white shado hover:shadow-xl hover:!scale-[105%] transition-all duration-500 cursor-pointer rounded-lg p-4 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-lg font-semibold mb-4 text-black tracking-wide uppercase">
                {title}
              </h2>
              <p className="text-4xl font-bold text-main drop-shadow-lg">
                {counts[index]}
              </p>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}

export default Counter;
