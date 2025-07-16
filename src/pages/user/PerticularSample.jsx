import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSampleByTitle } from "../../api/apiSample";
import { Helmet } from "react-helmet";
import SampleComponent from "../../components/user/sampleComponent";
import config from "../../api/config";
import axios from "axios";
import { toast } from "react-toastify";

const PerticularSample = () => {
  const { value } = useParams();
  const [sampleData, setSampleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allSamples, setAllSamples] = useState([]);

  console.log("Title from URL:", sampleData);

  useEffect(() => {
    const fetchSample = async () => {
      try {
        const response = await getSampleByTitle(value);
        setSampleData(response.data);
      } catch (err) {
        setError("Failed to load sample data");
      } finally {
        setLoading(false);
      }
    };

    fetchSample();
    const fetchAllSamples = async () => {
      try {
        const response = await axios.get(`${config.API_BASE_URL}/all-sample`);
        setAllSamples(response.data.data);
        // console.log(response);
      } catch (error) {
        console.log("Error fetching all Samples:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllSamples();
  }, [value]);

  console.log(value);

  if (loading) return <p>Loading sample data...</p>;
  if (error) return <p>{error}</p>;
  if (!sampleData) return <p>No sample data available</p>;

  console.log(allSamples);

  const handleDownload = async (file) => {
    console.log("file", file);
    const userId = sessionStorage.getItem("userId");
    if (!userId) {
      alert("Please log in first.");
      return;
    }

    try {
      const res = await axios.post(
        `${config.API_BASE_URL}/mark-download/${userId}`
      );

      console.log(res);

      // If download is allowed, simulate the link click
      const link = document.createElement("a");
      link.href = file;

      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.click();
      toast.success("Downloaded");
    } catch (error) {
      console.log(error);
      toast.error(
        "You have downloaded one sample. please contact us for more details"
      );
    }
  };

  return (
    <div className="p-5 container mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{value} | Uni Academic Assistance</title>
        <meta name="keywords" content={sampleData?.seo_keywords} />
        <meta name="description" content={sampleData?.seo_description} />
        <link
          rel="canonical"
          title="Sample"
          href={`https://uniacademicassistance.in/sample/${value}`}
        />
      </Helmet>
      <div className="mx-auto grid lg:grid-cols-[1fr_450px] md:grid-cols grid-cols-1 gap-5 mt-2">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2 ">
            {sampleData.moduleName} {sampleData.moduleCode}
          </h1>
          <h4 className="text-secondary text-gray-500 mb-5 ">
            Pages: {sampleData.pageCount} | Word Count: {sampleData.wordcount}
          </h4>
          <p className="text-gray-500"> {sampleData.crdate}</p>

          <div className="flex gap-4 mt-3">
            <a
              target="_black"
              title="Ask your query on WhatsApp"
              rel="noopener noreferrer"
              href={
                "http://api.whatsapp.com/send/?phone=7597981703&text&type=phone_number&app_absent=0"
              }
              className="bg-green-500 cursor-pointer hover:scale-[103%] transition-all duration-300 px-4 py-2 !rounded-[5px] !text-white"
            >
              Ask your query on WhatsApp
            </a>
            {/* <a
              href={sampleData.sample_file}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 cursor-pointer hover:scale-[103%] transition-all duration-300 px-4 py-2 !rounded-[5px] !text-white"
            >
              Download This Document
            </a> */}
            <button
              onClick={() => {
                handleDownload(sampleData.sample_file);
              }}
              className="bg-red-500 cursor-pointer hover:scale-[103%] transition-all duration-300 px-4 py-2 !rounded-[5px] !text-white"
            >
              Download This Document
            </button>
          </div>

          <p className="mt-4 text-gray-600">
            1.6M+ users. 1,000+ students smiling daily.
          </p>
          <div className="mt-8 border p-4 bg-gray-100 rounded-md">
            <p className="text-gray-700">
              This event will shape perceptions and decisions for both employers
              and those seeking jobs.
            </p>
          </div>

          <div className="mt-8  gap-6">
            <div className=" border p-4 bg-gray-100 rounded-md">
              <h2 className="text-lg font-semibold">
                {sampleData.moduleCode} {sampleData.moduleName}
              </h2>
              <p
                dangerouslySetInnerHTML={{ __html: sampleData.description }}
                className="text-gray-600 text-justify mt-3 "
              />
              <div className="mt-5">
                <div className="text-center shadow bg-white h-[50 rounded-lg p-4">
                  {sampleData.fileimages.map((image, index) => (
                    <div key={index} className="p-2 flex gap-10">
                      <img
                        src={image}
                        title={`File Image ${index + 1}`}
                        alt={`File Image ${index + 1}`}
                        className="max-h-[470px] mx-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="max-w-3xl mt-5 border border-gray-100 mx-auto p-6 bg-white shadow-md rounded-lg">
              <div className=" border p-4 bg-gray-100 rounded-md">
                <p className="text-gray-700 text-lg font-bold">
                  {sampleData.moduleCode} {sampleData.moduleName}
                </p>
              </div>

              {/* Module Info */}
              <div className="mt-4">
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li>
                    <strong>Module code:</strong>{" "}
                    <span className="font-bold"> {sampleData.moduleCode}</span>
                  </li>
                  <li>
                    <strong>Module name:</strong>{" "}
                    <span className="font-bold">{sampleData.moduleName}</span>
                  </li>
                  <li>
                    <strong>Word counts:</strong>{" "}
                    <span className="font-bold">{sampleData.wordcount}</span>
                  </li>
                  <li>
                    <strong>Pricing:</strong>{" "}
                    <span className="font-bold">{sampleData.price}</span>
                  </li>
                  <li>
                    <strong>Category:</strong>{" "}
                    <span className="font-bold">
                      {sampleData.sample_category?.category}
                    </span>
                  </li>
                </ul>
              </div>

              <p className="mt-2 italic text-main">
                👉 "Get expert assistance for your next academic assignment from
                Uni Academic Support and excel in your studies!"
              </p>
            </div>
          </div>
        </div>

        <div className=" border p-5 bg-gray-100 rounded-md">
          <h2 className="!text-2xl font-semibold">Related samples</h2>
          <div className="mt-5 flex lg:flex-col">
            {allSamples.length > 0 &&
              allSamples.map((sample) => (
                <SampleComponent key={sample.id} sample={sample} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerticularSample;
