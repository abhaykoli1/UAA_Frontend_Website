import * as React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Logo from "../../assets/UaaLogo.png";
import HamburgerIcon from "./ex";

const Header = ({ sidebar, toggleSidebar }) => {
  const links = [
    { path: "", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/samples", label: "Samples" },
    { path: "/blogs", label: "Blogs" },
  ];

  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="h-20 shadow-xl sticky top-0 bg-white text-black flex justify-between items-center">
      <div className="w-full lg:container mx-auto lg:px-0 px-5 flex justify-between items-center">
        <div className="flex items-center justify-between w-full">
          <a href="/" className="flex items-center" title="Logo">
            <img src={Logo} alt="Logo" className="h-24" title="UAA_Logo" />
          </a>
          <div className="items-center gap-4 lg:flex md:flex hidden">
            <nav className="flex gap-4">
              {links.map((link, index) => (
                <NavLink
                  onClick={() => goTop()}
                  key={index}
                  title={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `hover:underline hover:text-black font-bold ${
                      isActive ? "text-main" : "text-black"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            {isLoggedIn !== true ? (
              <nav className="flex gap-4">
                <a
                  href="/login"
                  title="Login"
                  className="px-0 py-1.5  text-black font-bold hover:text-main duration-500"
                >
                  Log In
                </a>
                <a
                  href="/register"
                  title="Sign Up"
                  className="border font-bold  hover:border-white px-2 mr-3 py-1.5 bg-purple-600 border-purple-600 text-white rounded-md hover:bg-black hover:text-white cursor-pointer duration-700 transition outline-none"
                >
                  Sign Up
                </a>
              </nav>
            ) : (
              <a
                onClick={() => {
                  sessionStorage.setItem("isLoggedIn", "false");
                  navigate("/");
                }}
                className="border font-bold mr-3 hover:border-white px-2 py-1.5 bg-main border-purple-600 text-white rounded-md hover:bg-black hover:text-white cursor-pointer duration-700 transition outline-none"
              >
                Log Out
              </a>
            )}
          </div>
          <div className="md:hidden mr-1 fixed top-6 right-4 z-50  hover:border-none focus:outline-none bg-transparent focus:border-none">
            <button
              onClick={toggleSidebar}
              className="relative h-8 text-black focus:outline-none hover:border-none bg-transparent focus:border-none"
            >
              <div
                className={`absolute left-0 bg-black  h-[5px] w-8  rounded  transform transition-transform duration-300 ${
                  sidebar
                    ? "rotate-45 translate-y-0 top-1/2"
                    : "-translate-y-2 top-3"
                }`}
              />
              <div
                className={`absolute top-1/2 left-0 w-8 h-[5px] bg-black rounded  transform transition-opacity duration-300 ${
                  sidebar ? "opacity-0 " : "opacity-100"
                }`}
              />
              <div
                className={`absolute  left-0 w-8 h-[5px] bg-black rounded  transform transition-transform duration-300 ${
                  sidebar
                    ? "-rotate-45 translate-y-0 top-1/2"
                    : "translate-y-2 top-[18px]"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
