import React, { useEffect, useState } from "react";
import BlogComponent from "../../components/user/blogComponent";
import pick from "../../assets/image/pick.png";
import Bg from "../../assets/icons/bg.jpg";
import { getAllBlogs } from "../../api/apiBlogs";
import { Helmet } from "react-helmet";

const Blogs = () => {
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
  // console.log();

  return (
    <section className="bg-gradient-to-br from-blue-100/50 to-white w-full">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blogs | Uni Academic Assistance </title>
        <meta name="description" content="uniacademicassistance" />
        <link
          rel="canonical"
          title="Blogs"
          href="https://uniacademicassistance.in/blogs"
        />
      </Helmet>
      <div className="mx-auto lg:">
        <div className=" px-10 pt-10 text-center">
          <h1 className="font-bold text-5xl  pt-7 pb-4  bg-gradient-to-r from-main to-pink-500 bg-clip-text text-transparent">
            Blog & Articles
          </h1>
          <p className="text-lg line-clamp-4">
            Comprehensive Assignment Assistance With a No-AI Guarantee!
          </p>
        </div>
        <div className="grid px-10 mt-10 gap-6 lg:grid-cols-[350px_1fr] md:grid-cols-[350px_1fr] sm:grid-cols-1 grid-cols-1 ">
          <div className="flex border border-purple-500 rounded-lg p-7 flex-col">
            <h2 className="font-bold ">All Blogs</h2>
            <div className="flex bg-white text-black p-5 rounded-lg mt-3">
              <ol className="flex flex-col space-y-3">
                <li> Essay Writing</li> <li>Assignment Writing</li>
                <li>Dissertation Writing</li>
                <li>Academic Integrity in Universities</li>
              </ol>
            </div>
            <img src={pick} alt="pick image" title="pick image" />
          </div>
          <div>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  ">
              {Blogs.map((blog) => (
                <BlogComponent key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
