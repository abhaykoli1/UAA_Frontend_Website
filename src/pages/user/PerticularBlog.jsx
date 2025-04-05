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
import BlogComponent from "../../components/user/blogComponent";
import { useParams } from "react-router-dom";
import { getAllBlogs, getBlogByTitle } from "../../api/apiBlogs";
import { Helmet } from "react-helmet";
// import { getAllBlogs } from "../../api/apiBlogs";
const PerticularBlog = () => {
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

  const value = useParams();
  console.log(value.value);

  const [Blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getAllBlogs();
        console.log(response.data);
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching Blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const [Blog, setBlog] = useState({});

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getBlogByTitle(value.value);
        console.log("data:", response.data);
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching Blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section className="py-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{value.value} | Uni Academic Assistance</title>
        <meta name="description" content={Blog.seo_description} />
        <link
          rel="canonical"
          href={`https://uniacademicassistance.in/blog/${value.value}`}
        />
      </Helmet>
      <div className=" mx-auto w-full px-10">
        <div className="row">
          <div className="col-md-12 mt-3">
            <div className="text-center shadow bg-white h-[500px] rounded-lg p-4">
              <img
                src={Blog.bannerImg}
                className=" w-auto max-h-[470px]  mx-auto"
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
        <button className="btn my-10 btn-success bg-green-500  text-white w-full py-5 rounded hover:bg-green-600">
          Click on Whatsapp
        </button>
        <div className="grid lg:grid-cols-[1fr_500px] md:grid-cols-2 grid-cols-1 gap-10 ">
          {/* Left Section */}

          <div className="lef">
            <h3 className="font-bold text-xl text-black mb-3">{Blog.title}</h3>
            {/* <p>{Blog.shortDec}</p> */}
            <p className="mt-5">{Blog.description}</p>

            <ButtonComponent btnText={"Book Now"} />
          </div>

          {/* Right Section */}
          <div className="">
            <div className="w-full mt-5 bg-white shadow-lg border border-gray-600 rounded-lg py-4 px-6">
              <label className="text-md font-bold text-slate-800">
                Share :
              </label>
              <div className="flex gap-4 py-3 ">
                <div className="flex gap-5 py- justify-center">
                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-3xl hover:text-blue-800 transition duration-200"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>

                  {/* Twitter */}
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 text-3xl hover:text-blue-600 transition duration-200"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>

                  {/* LinkedIn */}
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

            <div className="gap-6 mt-10">
              <div className="flex flex-col px- ">
                {Blogs.slice(0, 3).map((blog) => (
                  <BlogComponent key={blog.id} blog={blog} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerticularBlog;
