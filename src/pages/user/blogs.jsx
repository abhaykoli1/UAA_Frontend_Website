import React, { useEffect, useState } from "react";
import BlogComponent from "../../components/user/blogComponent";
import pick from "../../assets/image/pick.png";
import { getAllBlogs } from "../../api/apiBlogs";

const Blogs = () => {
  // const blogs = [
  //   {
  //     id: 1,
  //     imageUrl: "https://via.placeholder.com/800x400",
  //     date: "December 19, 2024",
  //     title: "How to Build a React App from Scratch",
  //     description:
  //       "In this blog post, we will cover all the essential steps to build a React app from scratch...",
  //     views: 124,
  //   },
  //   {
  //     id: 2,
  //     imageUrl: "https://via.placeholder.com/800x400",
  //     date: "December 18, 2024",
  //     title: "Understanding Redux in React",
  //     description:
  //       "Learn about the principles of Redux and how to manage application state efficiently...",
  //     views: 200,
  //   },
  //   {
  //     id: 3,
  //     imageUrl: "https://via.placeholder.com/800x400",
  //     date: "December 18, 2024",
  //     title: "Understanding Redux in React",
  //     description:
  //       "Learn about the principles of Redux and how to manage application state efficiently...",
  //     views: 200,
  //   },
  // ];

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
    <section className="">
      <div className=" px-10 pt-10 text-center">
        <h1 className="font-bold text-6xl py-7">Blog</h1>
        <p className="text-lg line-clamp-4">
          Comprehensive Assignment Assistance With a No-AI Guarantee!
        </p>
      </div>
      <div className="grid px-10 mt-10 gap-6 lg:grid-cols-[350px_1fr] md:grid-cols-[350px_1fr] sm:grid-cols-1 grid-cols-1 ">
        <div className="flex border border-pink-400 rounded-lg p-7 flex-col">
          <h2 className="font-bold ">All Blogs</h2>
          <div className="flex bg-white text-black p-5 rounded-lg mt-3">
            <ol className="flex flex-col space-y-3">
              <li> Essay Writing</li> <li>Assignment Writing</li>
              <li>Dissertation Writing</li>
              <li>Academic Integrity in Universities</li>
            </ol>
          </div>
          <img src={pick} />
        </div>
        <div>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-6 ">
            {Blogs.map((blog) => (
              <BlogComponent key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
