import { Route, Routes } from "react-router-dom";
import UserLayout from "./components/user/layout";
import "./index.css";
import Home from "./pages/user";
import Contact from "./pages/user/Contact";
import Blogs from "./pages/user/blogs";
import PerticularService from "./pages/user/PerticularService";
import PerticularBlog from "./pages/user/PerticularBlog";
import Sample from "./pages/user/sample";
import Services from "./pages/user/services";
import PerticularSample from "./pages/user/PerticularSample";
import PrivacyPolicy from "./pages/user/privary";
import TermsAndConditions from "./pages/user/terms";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import CheckAuth from "./components/common/check-auth";
import Hero from "./pages/user/hero";
import ContactUs from "./pages/user/ContactUs";
import About from "./pages/user/About";
import Verify from "./pages/auth/verify";
import { ToastContainer } from "react-toastify";

function App() {
  const sampleData = [
    {
      id: 1,
      moduleName: "001 Module Name",
      addOnDate: "13-Aug-2024",
      stats: [
        { value: 8, label: "Pages" },
        { value: 5394, label: "Words" },
        { value: 2500, label: "Views" },
        { value: 4535, label: "Downloads" },
      ],
      leftSection: {
        title: "UAA",
        subtitle: "You are Reading a preview",
        imageUrl: "",
      },
      rightSection: {
        text1: "To View Complete document",
        text2: "Click here to download the document",
        button1: "Download this Document",
        button2: "All Projects",
      },
      footer: {
        title: "UAA : Your Writing Partner",
        paragraphs: [
          "“See how UAA writes in the sample Paper.”",
          "This sample paper provides a clear format with an introduction, body, and conclusion. At UAA, we focus on quality without the boring stuff. The framework showcases our dedication. For a personal touch, explore our custom essay writing. Our experts ensure your essays reflect your words and style. Interested in more than just examples? Order custom essays from UAA. Our authors excel at every project, ensuring your academic success. Ready to simplify your writing journey? UAA is here to support you! Download our sample paper to grasp our writing style and explore our custom writing services to enhance your academic experience!",
          "Book your next academic assignment online from the best academic helpers at UAAounselling",
        ],
      },
    },
    {
      id: 2,
      moduleName: "002 Module Name",
      addOnDate: "13-Aug-2024",
      stats: [
        { value: 8, label: "Pages" },
        { value: 5394, label: "Words" },
        { value: 2500, label: "Views" },
        { value: 4535, label: "Downloads" },
      ],
      leftSection: {
        title: "UAI",
        subtitle: "You are Reading a preview",
        imageUrl: "",
      },
      rightSection: {
        text1: "To View Complete document",
        text2: "Click here to download the document",
        button1: "Download this Document",
        button2: "All Projects",
      },
      footer: {
        title: "UAA : Your Writing Partner",
        paragraphs: ["Paragraph 1", "Paragraph 2", "Paragraph 3"],
      },
    },
  ];

  return (
    <div className="">
      <Routes>
        {/* Public Routes */}
        <Route
          path="/login"
          element={
            <CheckAuth isPublic={true}>
              <Login />
            </CheckAuth>
          }
        />
        <Route
          path="/register"
          element={
            <CheckAuth isPublic={true}>
              <Register />
            </CheckAuth>
          }
        />
        <Route
          path="/verify"
          element={
            <CheckAuth isPublic={true}>
              <Verify />
            </CheckAuth>
          }
        />
        <Route
          path="/h"
          element={
            <CheckAuth isPublic={true}>
              <Hero />
            </CheckAuth>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <CheckAuth>
              <UserLayout />
            </CheckAuth>
          }
        >
          <Route path="" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="contact-Us" element={<ContactUs />} />
          <Route path="services" element={<Services />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="service/:value" element={<PerticularService />} />
          <Route path="blog/:value" element={<PerticularBlog />} />
          <Route path="samples" element={<Sample />} />
          <Route path="privacy-Policy" element={<PrivacyPolicy />} />
          <Route path="Terms&Condition" element={<TermsAndConditions />} />
          <Route path="sample/:value" element={<PerticularSample />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
