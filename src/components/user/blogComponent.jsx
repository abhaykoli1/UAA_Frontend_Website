import React from "react";
import { useNavigate } from "react-router-dom";

const BlogComponent = ({ blog }) => {
  const navigate = useNavigate();
  const handleBlog = (seoTitle) => {
    navigate(`/blog/${seoTitle}`);
    console.log("SEO Title:", seoTitle);
  };

  return (
    <div className=" bg-white shadow-lg rounded-lg overflow-hidden mb-8">
      {/* Image at the top */}
      <img
        src={"https://picsum.photos/seed/picsum/200/300"}
        alt="Blog Post"
        className="w-ful h-60 w-[500px] object-cover"
      />
      {/* Content */}
      <div className="p-6">
        {/* Date and Title */}
        <div className="text-gray-500 text-sm">{blog.blog.cr_date}</div>
        <h2 className="text-3xl font-semibold text-gray-800 mt-2">
          {blog.blog.title}
        </h2>

        {/* Description */}
        <p className="text-gray-700 mt-4">{blog.blog.shortDec}</p>

        {/* View Count */}
        <div className="flex items-center justify-between">
          <div className="mt-4 text-gray-600">
            {/* <span className="font-semibold">{views}</span> views */}
          </div>
          <button
            onClick={() => handleBlog(blog.seo_title)}
            className="mt-6 text-white hover:bg-black bg-blue-600 duration-700 transition-all "
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
