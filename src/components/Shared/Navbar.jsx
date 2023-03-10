import React, { useState } from "react";
import { CgSearch } from "react-icons/cg";
import { FiUploadCloud } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";
import Notification from "../Notification/Notification";

const Navbar = () => {
  const [searchBar,setSearchBar] = useState(false)
  return (
    <div className=" fixed md:static w-full bg-white left-0 flex justify-between items-center  gap-3 h-12">
          <div>
            <fieldset className="w-full space-y-1 text-gray-800">
              <label for="Search" className="hidden">
                Search
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button 
                  onClick={()=>setSearchBar(!searchBar)}
                    type="button"
                    title="search"
                    className="p-1 focus:outline-none focus:ring"
                  >
                    <CgSearch />
                  </button>
                </span>
                <div className={`fixed md:static flex items-center  ${searchBar ? 'top-5 transition-all duration-300':'-top-96 transition-all duration-300'} z-30 w-80 md:block`}>
                <input
                  type="search"
                  name="Search"
                  placeholder="Search..."
                  className="md:w-64 py-2 w-64 pl-10 text-sm  md:rounded-md sm:w-auto focus:outline-none rounded-l-md bg-gray-100 text-gray-800 focus:bg-gray-50 focus:border-violet-600"
                />
                <button
                onClick={()=>setSearchBar(!searchBar)}
                    type="button"
                    title="search"
                    className="p-1 md:hidden rounded-r-md bg-gray-100 px-3 py-2.5 focus:outline-none focus:ring"
                  >
                    <ImCancelCircle />
                  </button>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="md:mx-12">
            <ul className="flex items-center gap-3">
              <li className="flex justify-center items-center">
                <button className="hover:bg-gray-200 p-2 text-2xl rounded-full tooltip tooltip-bottom" data-tip="Upload"><FiUploadCloud className="" /></button>
              </li>
             <Notification />
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
  );
};

export default Navbar;
