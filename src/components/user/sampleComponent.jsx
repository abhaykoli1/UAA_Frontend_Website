import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllSamples } from "../../api/apiSample"; // Adjust the import path as needed

const SampleComponent = ({ sample }) => {
  // const [samples, setSamples] = useState({});
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const navigate = useNavigate();
  console.log(sample);

  // useEffect(() => {
  //   const fetchSamples = async () => {
  //     try {
  //       const data = await getAllSamples();
  //       setSamples(data.data); // Assuming data is an array of samples
  //     } catch (err) {
  //       setError("Failed to load samples");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchSamples();
  // }, []);

  const handleButtonClick = (seo_title) => {
    navigate(`/sample/${seo_title}`); // Navigate with dynamic ID
  };

  // if (loading) return <p>Loading samples...</p>;
  // if (error) return <p>{error}</p>;

  return (
    // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      key={sample.sample._id}
      className="relative mb-4 hover:scale-105 duration-500 border-pink-500 border rounded-lg"
    >
      <img
        src={sample.sample.file}
        alt={sample.sample.moduleName}
        className="w-full rounded-t-lg"
      />
      <div className="p-6 bg-gradient-to-b from-[#02fbd112] rounded-b-lg to-[#fdfdfd]">
        <h4 className="text-black font-bold px-0 py-2 rounded whitespace-nowrap overflow-hidden text-ellipsis max-w-[80%]">
          {sample.sample.moduleName}
        </h4>
        {/* <p className="text-black-50"> {sample.sample.moduleName}</p> */}
        <button
          onClick={() => handleButtonClick(sample.seo_title)}
          className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
        >
          Learn More
        </button>
      </div>
    </div>
    // </div>
  );
};

export default SampleComponent;
