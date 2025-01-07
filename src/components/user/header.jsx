import * as React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Logo from "../../assets/logo.png";

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
    <div className="h-20 sticky top-0 bg-[#111] text-white flex justify-between items-center">
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
                    `hover:underline hover:text-white font-bold ${
                      isActive ? "text-pink-500" : "text-white"
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
                  className="px-2 py-1.5 text-white font-bold hover:text-pink-500 duration-500"
                >
                  Log In
                </a>
                <a
                  href="/register"
                  className="border font-bold hover:border-white px-2 py-1.5 bg-pink-600 border-pink-600 text-white rounded-md hover:bg-white hover:text-pink-600 duration-700 transition outline-none"
                >
                  Sign Up
                </a>
              </nav>
            ) : (
              <a
                onClick={() => {
                  localStorage.setItem("isLoggedIn", "false");
                  navigate("/login");
                }}
                className="border font-bold hover:border-white px-2 py-1.5 bg-pink-600 border-pink-600 text-white rounded-md hover:bg-white hover:text-pink-600 duration-700 transition outline-none"
              >
                Log Out
              </a>
            )}
          </div>
          <div className="md:hidden fixed top-4 right-4 z-50">
            <button
              onClick={toggleSidebar} // Calls the toggle function
              className="text-white p-2 rounded-full bg-[#111] hover:bg-pink-600"
            >
              <FaBars size={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
