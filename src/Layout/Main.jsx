import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";
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
