import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSampleByTitle } from "../../api/apiSample";

const PerticularSample = () => {
  const { value } = useParams();
  const [sampleData, setSampleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("Title from URL:", value);

  useEffect(() => {
    const fetchSample = async () => {
      try {
        const response = await getSampleByTitle(value);
        setSampleData(response.data); // Extracting 'data' from API response
      } catch (err) {
        setError("Failed to load sample data");
      } finally {
        setLoading(false);
      }
    };

    fetchSample();
  }, [value]);

  if (loading) return <p>Loading sample data...</p>;
  if (error) return <p>{error}</p>;
  if (!sampleData) return <p>No sample data available</p>;

  return (
    <div className="p-5 container mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-center">
        {sampleData.moduleName}
      </h1>
      <h4 className="text-secondary text-gray-500 mb-5 text-center">
        Pages: {sampleData.pageCount} | Word Count: {sampleData.wordcount}
      </h4>
      <div className="mb-5">
        <img
          src={sampleData.file}
          alt={sampleData.moduleName}
          className="w-full max-w-md mx-auto mb-4"
        />
        <p className="text-gray-600 text-justify">{sampleData.description}</p>
      </div>

      <div className="flex flex-wrap justify-around mb-8">
        {sampleData.fileimages.map((image, index) => (
          <div key={index} className="p-2">
            <img
              src={image}
              alt={`File Image ${index + 1}`}
              className="max-w-[150px] mx-auto"
            />
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4 text-center">SEO Information</h3>
        <p className="text-gray-600 mb-2">
          <strong>Title:</strong> {sampleData.seo_title}
        </p>
        <p className="text-gray-600">
          <strong>Description:</strong> {sampleData.seo_description}
        </p>
      </div>
    </div>
  );
};

export default PerticularSample;
