import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ children }) {
  const location = useLocation();

  const loginTime = parseInt(sessionStorage.getItem("loginTime"), 10);
  const isLogin = sessionStorage.getItem("isLoggedIn") === "true";
  const currentTime = Date.now();

  const sessionDuration = 30 * 60 * 1000; // 30 minutes

  // Check if session expired
  if (isLogin && loginTime && currentTime - loginTime > sessionDuration) {
    sessionStorage.clear();
    return <Navigate to="/login" replace />;
  }

  const publicPaths = [
    "/",
    "/contact-Us",
    "/contact",
    "/about",
    "/services",
    "/blogs",
    // "/samples",
    "/privacy-Policy",
    "/Terms&Condition",
    "/login",
    "/register",
    "/verify",
  ];

  const dynamicPublicPaths = ["/service/", "/blog/", "/sample/"];

  const isPublicStatic = publicPaths.includes(location.pathname);
  const isPublicDynamic = dynamicPublicPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  const isPublicRoute = isPublicStatic || isPublicDynamic;

  if (
    isLogin &&
    (location.pathname === "/login" || location.pathname === "/register")
  ) {
    return <Navigate to="/" replace />;
  }

  if (isPublicRoute) {
    return <>{children}</>;
  }

  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export default CheckAuth;
