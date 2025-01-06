import React from "react";
import { useParams } from "react-router-dom";

const PerticularSample = ({ data }) => {
  const { id } = useParams(); // Get the sample ID from the URL

  const sampleData = data.find((item) => item.id === parseInt(id)) || {
    moduleName: "Sample Not Found",
    addOnDate: "",
    stats: [],
    leftSection: {},
    rightSection: {},
    footer: {},
  };

  return (
    <div className="p-5 container mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-center">
        {sampleData.moduleName}
      </h1>
      <h4 className="text-secondary text-gray-500 mb-5 text-center">
        Add on - {sampleData.addOnDate}
      </h4>

      {/* Stats Section */}
      <div className="flex flex-wrap justify-around mb-8">
        {sampleData.stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center px-4 py-2 border-b sm:border-r sm:border-b-0 last:sm:border-none border-gray-300 w-1/2 sm:w-auto"
          >
            <p className="text-lg font-bold">{stat.value}</p>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="border border-blue-500 flex flex-col sm:flex-row h-auto sm:h-[400px]">
        {/* Left Section */}
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold mb-4 text-center">
            {sampleData.leftSection.title}
          </h1>
          <p className="text-gray-600 mb-4 text-center">
            {sampleData.leftSection.subtitle}
          </p>
          <img
            src={
              sampleData.leftSection.imageUrl ||
              "https://via.placeholder.com/150"
            }
            alt="Preview"
            className="max-w-[150px] mx-auto"
          />
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 p-4">
          <p className="text-gray-600 mb-4 text-center">
            {sampleData.rightSection.text1}
          </p>
          <p className="text-gray-600 mb-4 text-center">
            {sampleData.rightSection.text2}
          </p>
          <button className="bg-red-500 text-white rounded-lg py-2 px-4 mb-3 hover:bg-red-600">
            {sampleData.rightSection.button1}
          </button>
          <button className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600">
            {sampleData.rightSection.button2}
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4 text-center">
          {sampleData.footer.title}
        </h3>
        {sampleData.footer.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-white mb-4 text-justify px-4 sm:px-0">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PerticularSample;
