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
      title: "What if I'm not satisfied with the assignment I receive?",
      content:
        "If you’re not satisfied with the assignment, we offer free revisions to ensure it meets your expectations. Simply provide us with detailed feedback on what needs to be improved, and we’ll make the necessary changes. Your satisfaction is our priority.",
    },
    {
      title: "How do you ensure the quality of the assignments?",
      content:
        "Our team consists of experienced professionals with expertise in various academic fields. Each assignment is carefully researched, written, and reviewed to meet high academic standards. Additionally, we have a quality assurance team that checks for clarity, coherence, and adherence to your instructions.",
    },
    {
      title: "Will my assignment be original and free of plagiarism?",
      content:
        "Yes, all assignments are completed by our experts from scratch to ensure originality. We use plagiarism detection tools to verify that the content is 100% unique before delivering it to you.",
    },
    {
      title: " How quickly can I receive help with my assignment?",
      content:
        "The turnaround time depends on the complexity and length of the assignment. We offer different delivery options, including urgent help for tight deadlines. Please specify your deadline when submitting your request, and we’ll do our best to accommodate it.",
    },
    {
      title: " How do I submit my assignment for help?",
      content:
        "Detailed explanation of feature You can submit your assignment through our online submission form on our website. Simply upload the assignment instructions, any relevant materials, and specify the deadline. Our team will review it and get in touch with you promptly..",
    },
    {
      title: "What types of assignments can you assist with?",
      content:
        "We can assist with a wide range of assignments, including essays, research papers, case studies, lab reports, presentations, and more. Our expertise covers various subjects such as humanities, sciences, business, and technical fields.",
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
      <h2 className="text-5xl font-extrabold text-center mb-20">
        Tailored Solutions for Your Needs
      </h2>
      <div className="grid px-10 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-20">
        {services.map((item) => (
          <ServicesComponent item={item} />
        ))}
      </div>
      <div className="flex justify-center mt-8 w-full">
        <button className="text-white w-40 rounded-full hover:scale-105 duration-500 transition-all">
          View More
        </button>{" "}
      </div>
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
