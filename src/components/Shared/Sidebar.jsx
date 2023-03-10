import React, { useState } from 'react';
import { CgHome, CgMenuMotion, CgMusic } from 'react-icons/cg';
import { FaGripfire,FaRegClock } from 'react-icons/fa';
import { RiGamepadLine,RiHistoryFill } from 'react-icons/ri';
import { TfiCup } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

const Sidebar = ({hideSideBar, setHideSideBar}) => {
   
    return (
        <div className="md:flex hidden flex-col">
          <div className="flex justify-between">
            <div
              className={`md:flex hidden  ${
                hideSideBar
                  ? "w-0 h-0 duration-300 transition-all"
                  : "w-20 duration-300 px-6 py-2 transition-all"
              }`}
            >
              <img
                className="w-12"
                src="https://res.cloudinary.com/dcckbmhft/image/upload/v1677914511/fav_dtornq.svg"
                alt=""
              />
            </div>
            <div
              onClick={() => setHideSideBar(!hideSideBar)}
              className="px-6 py-4"
            >
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
            {/* Home */}
            <li className='font-bold'>
              <Link
                to={"#"}
                className={`flex items-center ${
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
            {/* Trending */}
            <li className='font-bold'>
              <Link
                to={"#"}
                className={`flex items-center ${
                  hideSideBar ? "justify-center" : "justify-start"
                }`}
              >
                <div className="w-5 h-5 ">
                  <FaGripfire className="text-xl" />
                </div>
                <span className={`${hideSideBar ? "hidden" : "flex"}`}>
                  Trending
                </span>
              </Link>
            </li>
            <li className='font-bold'>
              <Link
                to={"#"}
                className={`flex items-center ${
                  hideSideBar ? "justify-center" : "justify-start"
                }`}
              >
                <div className="w-5 h-5 ">
                  <CgMusic className="text-xl" />
                </div>
                <span className={`${hideSideBar ? "hidden" : "flex"}`}>
                  Music
                </span>
              </Link>
            </li>
            <li className='font-bold'>
              <Link
                to={"#"}
                className={`flex items-center ${
                  hideSideBar ? "justify-center" : "justify-start"
                }`}
              >
                <div className="w-5 h-5 ">
                  <RiGamepadLine className="text-xl" />
                </div>
                <span className={`${hideSideBar ? "hidden" : "flex"}`}>
                  Gaming
                </span>
              </Link>
            </li>
            <li className='font-bold'>
              <Link
                to={"#"}
                className={`flex items-center ${
                  hideSideBar ? "justify-center" : "justify-start"
                }`}
              >
                <div className="w-5 h-5 ">
                  <TfiCup className="text-xl" />
                </div>
                <span
                  className={`${
                    hideSideBar
                      ? "hidden h-3 overflow-hidden"
                      : "flex h-5 overflow-hidden"
                  }`}
                >
                  Sports
                </span>
              </Link>
            </li>
            <li className='font-bold'>
              <Link
                to={"#"}
                className={`flex items-center ${
                  hideSideBar ? "justify-center" : "justify-start"
                }`}
              >
                <div className="w-5 h-5 ">
                  <RiHistoryFill className="text-xl" />
                </div>
                <span className={`${hideSideBar ? "hidden" : "flex"}`}>
                  Watch Latter
                </span>
              </Link>
            </li>
            <li className='font-bold'>
              <Link
                to={"#"}
                className={`flex items-center ${
                  hideSideBar ? "justify-center" : "justify-start"
                }`}
              >
                <div className="w-5 h-5 ">
                  <FaRegClock className="text-xl" />
                </div>
                <span className={`${hideSideBar ? "hidden" : "flex"}`}>
                 History
                </span>
              </Link>
            </li>
          </ul>
        </div>
    );
};

export default Sidebar;