import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ children }) {
  const location = useLocation();
  const isLogin = localStorage.getItem("isLoggedIn") === "true";

  const publicPaths = [
    "/",
    "/contact-Us",
    "/services",
    "/blogs",
    "/samples",
    "/privacy-Policy",
    "/Terms&Condition",
  ];

  if (!isLogin && publicPaths.includes(location.pathname)) {
    return <>{children}</>;
  }
  if (
    isLogin &&
    (location.pathname === "/login" || location.pathname === "/register")
  ) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}

export default CheckAuth;
