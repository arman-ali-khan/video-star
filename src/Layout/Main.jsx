import React, { useState } from "react";
import { CgHome, CgMenuMotion, CgSearch } from "react-icons/cg";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header";

const Main = () => {
  const [hideSideBar, setHideSideBar] = useState(false);
  return (
    <div>
      <div className="flex  gap-3 w-full">
        <div>
          <div className="flex justify-between">
            <div className={`  ${hideSideBar ? 'w-0 h-0 duration-300 transition-all':'w-20 duration-300 px-6 py-2 transition-all' }`}>
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
      <div className="mx-3  flex justify-between items-center  gap-3 h-12">
          <div>
            <fieldset className="w-full space-y-1 text-gray-800">
              <label for="Search" className="hidden">
                Search
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="button"
                    title="search"
                    className="p-1 focus:outline-none focus:ring"
                  >
                    <CgSearch />
                  </button>
                </span>
                <input
                  type="search"
                  name="Search"
                  placeholder="Search..."
                  className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-100 text-gray-800 focus:bg-gray-50 focus:border-violet-600"
                />
              </div>
            </fieldset>
          </div>
          <div className="mx-12">
            <ul className="flex items-center gap-3">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <div>
                 
                  <div className="dropdown dropdown-end">
                  <label tabIndex={0} className=" m-1"> <img className="w-8 h-8 rounded-full object-cover" src="https://res.cloudinary.com/dcckbmhft/image/upload/v1673848125/sample.jpg" alt="" /></label>
  <ul tabIndex={0} className="dropdown-content menu p-2 border bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
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
