import React, { useState } from "react";
import { CgHome, CgMenuMotion, CgNotifications, CgSearch } from "react-icons/cg";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import {RiNotification4Line} from "react-icons/ri";
import Navbar from "../components/Shared/Navbar";

const Main = () => {
  const [hideSideBar, setHideSideBar] = useState(false);
  return (
    <div>
      <div className="flex gap-3 w-full">
        <div className="md:flex hidden flex-col">
          <div className="flex justify-between">
            <div className={`md:flex hidden  ${hideSideBar ? 'w-0 h-0 duration-300 transition-all':'w-20 duration-300 px-6 py-2 transition-all' }`}>
              <img className='w-12' src="https://res.cloudinary.com/dcckbmhft/image/upload/v1677914511/fav_dtornq.svg" alt="" />
            </div>
            <div onClick={()=>setHideSideBar(!hideSideBar)} className="px-6 py-4">
              <CgMenuMotion className="text-2xl" />
            </div>
          </div>
          <ul
            className={`menu rounded-none border-r-2 bg-base-100 h-screen ${
              hideSideBar
                ? "w-20 transition-all ease-out duration-300"
                : "w-56 ease-out transition-all duration-300"
            } p-2 rounded-box`}
          >
            <li>
              <Link
                to={"#"}
                className={`flex ${
                  hideSideBar ? "justify-center" : "justify-start"
                }`}
              >
                <div className="w-5 h-5 ">
                  <CgHome className="text-xl" />
                </div>
                <span className={`${hideSideBar ? "hidden" : "flex"}`}>
                  Item
                </span>
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className={`flex ${
                  hideSideBar ? "justify-center" : "justify-start"
                }`}
              >
                <div className="w-5 h-5 ">
                  <CgHome className="text-xl" />
                </div>
                <span className={`${hideSideBar ? "hidden" : "flex"}`}>
                  Item
                </span>
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className={`flex ${
                  hideSideBar ? "justify-center" : "justify-start"
                }`}
              >
                <div className="w-5 h-5 ">
                  <CgHome className="text-xl" />
                </div>
                <span className={`${hideSideBar ? "hidden" : "flex"}`}>
                  Item
                </span>
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className={`flex ${
                  hideSideBar ? "justify-center" : "justify-start"
                }`}
              >
                <div className="w-5 h-5 ">
                  <CgHome className="text-xl" />
                </div>
                <span className={`${hideSideBar ? "hidden" : "flex"}`}>
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className={`flex ${
                  hideSideBar ? "justify-center" : "justify-start"
                }`}
              >
                <div className="w-5 h-5 ">
                  <CgHome className="text-xl" />
                </div>
                <span
                  className={`${
                    hideSideBar
                      ? "hidden h-3 overflow-hidden"
                      : "flex h-5 overflow-hidden"
                  }`}
                >
                  My Profile
                </span>
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className={`flex ${
                  hideSideBar ? "justify-center" : "justify-start"
                }`}
              >
                <div className="w-5 h-5 ">
                  <CgHome className="text-xl" />
                </div>
                <span className={`${hideSideBar ? "hidden" : "flex"}`}>
                  Item
                </span>
              </Link>
            </li>
          </ul>
        </div>
        {/* Navbar */}
      <div className="w-full">
     <Navbar />
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
