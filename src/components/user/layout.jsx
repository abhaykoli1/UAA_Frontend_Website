import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "../../pages/user/Footer";
import Sidebar from "./sidebar";

const UserLayout = () => {
  const [sidebar, setSidebar] = useState(false); // Sidebar state

  // Toggle the sidebar
  const toggleSidebar = () => {
    setSidebar(!sidebar); // This will toggle the sidebar visibility
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="fixed top-0 w-full right-0 bg-transparent z-50">
        <Header sidebar={sidebar} toggleSidebar={toggleSidebar} />
      </div>
      <Sidebar
        sidebar={sidebar} // Passes the sidebar state to Sidebar component
        setSidebar={setSidebar} // Passes setSidebar function to Sidebar component
      />
      <main className="absolute  top-20 right-0 left-0">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default UserLayout;
