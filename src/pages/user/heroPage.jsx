import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../api/config";

import image1 from "../../assets/image/Home1.png";
import image2 from "../../assets/image/Home2.png";
import image3 from "../../assets/image/Home3.png";

const images2 = { 0: image1, 1: image2, 2: image3 };

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]); // This will hold the images array of heroes[0]

  console.log(images2);
  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const res = await axios.get(`${config.API_BASE_URL}/heroes`);
        if (res.data.length > 0) {
          setImages(res.data[0].images); // Only use the first hero's images
        }
      } catch (error) {
        console.error("Error fetching heroes:", error);
      }
    };

    // sdsd;

    fetchHeroes();
  }, []);

  // Auto-slide effect
  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full h-auto overflow-hidden bg-gray-100">
      {/* Image Slide Container */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {Object.values(images2).map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              title={`UAA Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* sdsd */}

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Object.values(images2).map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-8 h-[5px] rounded-sm cursor-pointer ${
              currentIndex === index ? "bg-main" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
