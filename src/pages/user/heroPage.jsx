import React from "react";
import Home1 from "../../assets/image/Home1.png";
import Home2 from "../../assets/image/Home2.png";
import Home3 from "../../assets/image/Home3.png";

function ImageCarousel() {
  const images = [Home1, Home2, Home3];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-auto overflow-hidden bg-gray-100">
      {/* Image Container */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-8 !h-[5px] rounded-sm  ${
              currentIndex === index ? "bg-main" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
