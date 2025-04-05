import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import ButtonComponent from "../../components/user/buttonComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Accordion from "../../components/user/accordionComponent";
import { useParams } from "react-router-dom";
import { getServiceByTitle } from "../../api/apiServices";
import { Helmet } from "react-helmet";

const PerticularService = () => {
  const accordionItems = [
    {
      title: "What additional benefits do you provide?",
      content:
        "Choose UAA for top-notch essay writing. Our service guarantees the best writers, unique content, timely submissions, regular updates, and free edits for a satisfying experience.",
    },
    {
      title: "Are UAA essays plagiarism-free?",
      content:
        "UAA ensures plagiarism-free papers by expert writers who create content from scratch. We use advanced plagiarism detection, provide a free originality report, and guarantee proper in-text citations and references, ensuring a completely plagiarism-free essay.",
    },
    {
      title: "What makes UAA better than others?",
      content:
        "UAA, serving for over 6 years, offers top-quality paper writing services including essays, research papers, and case studies. Our skilled writers prioritize student satisfaction, backed by free edits. Try our services and experience excellence.",
    },
  ];

  const { value } = useParams();
  const [service, setService] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await getServiceByTitle(value);
        setService(response.data);
      } catch (error) {
        setError("Failed to load service data.");
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [value]);

  console.log(service[0]);

  if (loading)
    return <p className="text-center text-white">Loading service data...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!service)
    return <p className="text-center text-white">No service data found.</p>;

  return (
    <section className=" text-bla py-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{value} | Uni Academic Assistance</title>
        <meta name="description" content={service[0]?.seo_description} />
        <link
          rel="canonical"
          href={`https://uniacademicassistance.in/blog/${value}`}
        />
      </Helmet>
      <div className="mx-auto w-full px-10">
        <div className="row">
          <div className="col-md-12 mt-3">
            <div className="text-center shadow bg-white h-[50 rounded-lg p-4">
              <img
                src={service[0]?.bannerImg}
                alt={service[0]?.title}
                className="max-h-[470px] mx-auto"
              />
            </div>
            <ul className="flex justify-center mt-3 space-x-8">
              <li className="flex items-center space-x-2 text-gray-400">
                <a href="#" className="hover:underline">
                  <i className="fa fa-comments text-blue-500"></i>
                  <span className="ml-1">131</span>
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <a href="#" className="hover:underline">
                  <i className="fa fa-eye text-blue-500"></i>
                  <span className="ml-1">255</span>
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <a href="#" className="hover:underline">
                  <i className="fa fa-comments text-blue-500"></i>
                  <span className="ml-1">14</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid lg:grid-cols-[600px_1fr] md:grid-cols-2 grid-cols-1 gap-10">
          <div className="">
            <div>
              <div className="text-center mt-5">
                <p className="font-semibold text-2xl">
                  The Best Counselling & Sample Paper Help
                </p>
                <p className="text-gray-400 text-lg">
                  Get done proofread and counselling service.
                </p>
              </div>

              <div className="bg-transparent sticky top-0 px-6 py-6 mt-4 rounded-lg shadow-md border border-purple-600">
                <h5 className="text-center font-semibold text-xl mb-7">
                  Fill your details & get your counselling done.
                </h5>
                {/* <ButtonComponent btnText={"Counselling Help"} /> */}

                <form className="text-center mt-4">
                  <input
                    className="block w-full py-3 px-4 text-lg mb-4 border rounded-lg text-black  border-gray-600 placeholder-gray-400"
                    placeholder="Enter Your name"
                  />
                  <input
                    className="block w-full py-3 px-4 text-lg mb-4 border rounded-lg text-black  border-gray-600 placeholder-gray-400"
                    placeholder="Enter Your email"
                  />
                  <div className="flex gap-4 mb-4">
                    <input
                      type="time"
                      className="py-3 px-4 border rounded-lg w-full text-black  border-gray-600"
                    />
                    <input
                      type="tel"
                      placeholder="Phone No."
                      className="py-3 px-4 border rounded-lg w-full text-black  border-gray-600 placeholder-gray-400"
                    />
                  </div>
                  <input
                    className="block w-full py-3 px-4 text-lg mb-4 border rounded-lg text-black  border-gray-600 placeholder-gray-400"
                    placeholder="Your subject / Course code"
                  />
                  <div className="flex gap-4 mb-4">
                    <input
                      type="time"
                      className="py-3 px-4 border rounded-lg w-full text-black  border-gray-600"
                    />
                    <input
                      type="date"
                      className="py-3 px-4 border rounded-lg w-full text-black  border-gray-600"
                    />
                  </div>
                  <input
                    className="block w-full py-3 px-4 text-lg mb-4 border rounded-lg text-black  border-gray-600 placeholder-gray-400"
                    placeholder="No. of pages / words"
                  />
                  <textarea
                    className="block w-full py-3 px-4 text-lg mb-4 border rounded-lg text-black  border-gray-600 placeholder-gray-400"
                    placeholder="Enter Counselling Subject"
                  ></textarea>

                  <div className="mb-4">
                    <input
                      type="file"
                      className="block w-full text-gray-400 file:duration-500 file:mr-4 file:py-2  file:px-4 file:rounded-lg file:cursor-pointer transition-all file:border-pink file:bg-blue-100 file:text-sm file:font-medium file:border-[0.5px]  file:text-black file:border-white file:hover:bg-gray-900  file:hover:text-white"
                      multiple
                    />
                  </div>
                  <button className="bg-purple-600 w-full mr-4 sm:mr-5 hover:bg-purple-700 text-white font-semibold transition duration-500 py-2 px-4 sm:px-6 rounded mb-4 sm:mb-0">
                    Book Now
                  </button>
                </form>
              </div>
            </div>
            <div className="w-full mt-5 bg-white shadow-lg border border-gray-600 rounded-lg py-4 px-6">
              <label className="text-md font-bold text-slate-800">
                Share :
              </label>
              <div className="flex gap-4 py-3">
                <div className="flex gap-5 justify-center">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-3xl hover:text-blue-800 transition duration-200"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>

                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 text-3xl hover:text-blue-600 transition duration-200"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 text-3xl hover:text-blue-900 transition duration-200"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="left">
            <h3 className="font-bold text-xl text-black">
              {service[0]?.title}
            </h3>
            <p>{service[0]?.description}</p>
            {/* <ButtonComponent btnText={"Book Now"} /> */}
            <button className="btn btn-success mt-6 bg-green-500 text-white w-full py-2 rounded hover:bg-green-600">
              Click on Whatsapp
            </button>
            <div className="container mx-auto">
              <h1 className="text-center font-bold text-2xl my-6">FAQ's</h1>
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerticularService;
