import * as React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import HamburgerIcon from "./ex";

const Header = ({ sidebar, toggleSidebar }) => {
  const links = [
    { path: "", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/samples", label: "Samples" },
    { path: "/blogs", label: "Blogs" },
  ];
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <div className="h-20 shadow-xl sticky top-0 bg-white text-black flex justify-between items-center">
      <div className="w-full px-12 mx-auto flex justify-between items-center">
        <div className="flex items-center justify-between w-full">
          <div>
            <img src={Logo} alt="Logo" className="h-12" />
          </div>
          <div className="flex items-center gap-5 lg:flex md:flex hidden">
            <nav className="flex gap-5">
              {links.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  className={({ isActive }) =>
                    `hover:underline hover:text-black font-bold ${
                      isActive ? "text-pink-500" : "text-black"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            {isLoggedIn !== true ? (
              <nav className="flex gap-5">
                <a
                  href="/login"
                  className="px-2 py-1.5 text-black font-bold hover:text-pink-500 duration-500"
                >
                  Log In
                </a>
                <a
                  href="/register"
                  className="border font-bold hover:border-white px-2 py-1.5 bg-pink-600 border-pink-600 text-white rounded-md hover:bg-black hover:text-white cursor-pointer duration-700 transition outline-none"
                >
                  Sign Up
                </a>
              </nav>
            ) : (
              <a
                onClick={() => {
                  localStorage.setItem("isLoggedIn", "false");
                  navigate("/");
                }}
                className="border font-bold hover:border-white px-2 py-1.5 bg-pink-600 border-pink-600 text-white rounded-md hover:bg-black hover:text-white cursor-pointer duration-700 transition outline-none"
              >
                Log Out
              </a>
            )}
          </div>
          <div className="md:hidden fixed top-6 right-4 z-50  hover:border-none focus:outline-none bg-transparent focus:border-none">
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
