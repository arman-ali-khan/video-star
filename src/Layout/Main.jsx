import React, { useState } from "react";
import {
  CgHome,
  CgMenuMotion,
  CgNotifications,
  CgSearch,
} from "react-icons/cg";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import { RiNotification4Line } from "react-icons/ri";
import Navbar from "../components/Shared/Navbar";
import Sidebar from "../components/Shared/Sidebar";

const Main = () => {
  const [hideSideBar, setHideSideBar] = useState(false);
  return (
    <div>
      <div className="flex gap-3 w-full">
        <Sidebar hideSideBar={hideSideBar} setHideSideBar={setHideSideBar} />
        {/* Navbar */}
        <div className="w-full">
          <Navbar  hideSideBar={hideSideBar} />
          <div>
            <Outlet />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Main;
