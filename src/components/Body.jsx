import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";
import useLogin from "../utils/hooks/useLogin";

const Body = () => {
  useLogin();
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
