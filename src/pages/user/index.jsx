import { Fragment, useEffect, useState } from "react";
import Hero from "./hero";
import Contact from "./Contact";
import Counter from "./counter";
import Page1 from "./page1";
import WhyChooseUS from "./whyChooseUS";
import BlogComponent from "../../components/user/blogComponent";
import ServicesComponent from "../../components/user/ServicesComponent";
import ServicesProcess from "./serviceProcess";
import { getAllServices } from "../../api/apiServices";
import { getAllBlogs } from "../../api/apiBlogs";
import ButtonComponent from "../../components/user/buttonComponent";

const Home = () => {
  const accordionItems = [
    {
      title: "Feature 1",
      content: "Detailed explanation of feature 1.",
    },
    {
      title: "Feature 2",
      content: "Detailed explanation of feature 2.",
    },
    {
      title: "Feature 3",
      content: "Detailed explanation of feature 3.",
    },
    {
      title: "Feature 1",
      content: "Detailed explanation of feature 1.",
    },
    {
      title: "Feature 2",
      content: "Detailed explanation of feature 2.",
    },
    {
      title: "Feature 3",
      content: "Detailed explanation of feature 3.",
    },
  ];

  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getAllServices();
        console.log(response.data);
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

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
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  console.log(isLoggedIn);
  return (
    <Fragment className="w-full">
      <Hero />
      <Page1 />
      <ServicesProcess />
      {/* <h2 className="text-5xl font-extrabold text-center text-white mb-20 !-mt-40">
        Tailored Solutions for Your Needs
      </h2>
      <div className="grid px-10 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-10">
        {services.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <ServicesComponent item={item} />
        ))}
      </div> */}
      {/* <div className="flex justify-center mt-8 w-full">
        <ButtonComponent btnText={"View More"} />
      </div> */}
      <Counter />
      <WhyChooseUS items={accordionItems} />
      <h1 className="text-center mt-12 font-bold">Blogs</h1>
      <div className="px-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-10">
        {Blogs.map((blog) => (
          <BlogComponent key={blog.id} blog={blog} />
        ))}
      </div>
      <Contact />
    </Fragment>
  );
};

export default Home;
