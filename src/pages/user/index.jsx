import { Fragment, useEffect, useState } from "react";
import Hero from "./hero";
import Contact from "./Contact";
import Counter from "./counter";
import Page1 from "./page1";

import BlogComponent from "../../components/user/blogComponent";
import ServicesComponent from "../../components/user/ServicesComponent";
import ServicesProcess from "./serviceProcess";
import { getAllServices } from "../../api/apiServices";
import { getAllBlogs } from "../../api/apiBlogs";
import ButtonComponent from "../../components/user/buttonComponent";
import WhyChooseUS from "./whyChooseUs";
import ImageCarousel from "./heroPage";
import { Helmet } from "react-helmet";

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
    {
      title: " What if I get failed?",
      content:
        "UAA has worked on 95% of passed results so far hence be assured that you will get pass results.However individual performance does matter hence we will surely investigate your issue with our team and get back to you with the best possible solution.",
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
    <section className="w-full">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Uni Academic Assistance</title>
        <meta name="description" content="uniacademicassistance" />
        <link
          rel="canonical"
          title="Home Page"
          href="https://uniacademicassistance.in"
        />
      </Helmet>

      <ImageCarousel />
      <Page1 />
      <ServicesProcess />
      <h3 className="font-bold  text-2xl sm:text-3xl lg:text-4xl pt-7 pb-4 text-center uppercase bg-gradient-to-r from-main to-pink-500 bg-clip-text text-transparent">
        Tranding Services
      </h3>
      <section className="mx-auto lg:container grid lg:px-5  px-5 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-8">
        {services.map((item) => (
          <ServicesComponent item={item} />
        ))}
      </section>
      <div className="flex justify-center mt-10 w-full ">
        <a
          href="/services"
          title="Services"
          className="text-white flex text-xl font-semibold items-center justify-center hover:text-white hover:shadow-xl hover:!cursor-pointer bg-main w-52 h-14 rounded-full hover:scale-105 duration-500 transition-all"
        >
          View More
        </a>
      </div>
      <Counter />
      <WhyChooseUS items={accordionItems} />
      <h3 className="font-bold  text-2xl sm:text-3xl lg:text-4xl pt-7 pb-4 text-center uppercase bg-gradient-to-r from-main to-pink-500 bg-clip-text text-transparent">
        Blogs & Articles
      </h3>
      <section className="mx-auto lg:container px-5 lg:px-5  grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-10">
        {Blogs.map((blog) => (
          <BlogComponent key={blog.id} blog={blog} />
        ))}
      </section>
      <div className="flex justify-center mt-3 w-full ">
        <a
          href="/blogs"
          title="Blogs"
          className="text-white flex text-xl font-semibold items-center justify-center hover:text-white hover:shadow-xl hover:!cursor-pointer bg-main w-52 h-14 rounded-full hover:scale-105 duration-500 transition-all"
        >
          All Blogs
        </a>
      </div>
      <Contact />
    </section>
  );
};

export default Home;
