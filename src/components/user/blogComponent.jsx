import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const BlogComponent = ({ blog }) => {
  const navigate = useNavigate();
  const handleBlog = (seoTitle) => {
    navigate(`/blog/${seoTitle}`);
    console.log("SEO Title:", seoTitle);
  };

  console.log(blog.seo_title);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className=" bg-white hover:shadow-2xl  border duration-500 transition-all hover:scale-[102%] rounded-lg overflow-hidden mb-8">
      <div className="flex flex-col justify-between h-full ">
        <img
          src={blog.blog.bannerImg}
          title={blog.blog.title}
          alt={blog.blog.title}
          className="w-ful h-60 w-[500px] object-cover border-b"
        />
        {/* Content */}
        <div className="flex justify-between  flex-col h-[100%] ">
          <div className="px-6 py-4 ">
            <h2 className="text-2xl font-semibold text-gray-800 line-clamp-1 ">
              {blog.blog.title}
            </h2>
            <p className="text-gray-700 mt-2 line-clamp-3">
              {blog.blog.shortDec}
            </p>
          </div>
          {/* Footer */}
          <div className="flex h-20  px-6 bg-main/10 relative items-center justify-between">
            <div>
              <div className="text-gray-500 text-sm">{blog.blog.cr_date}</div>
              <button
                onClick={() => {
                  goTop();
                  handleBlog(blog.seo_title);
                }}
                className="mt-6 absolute bottom-5 right-6  text-white hover:bg-black bg-main duration-700 transition-all "
              >
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
