import React, { useContext, useState } from "react";
import { CgSearch } from "react-icons/cg";
import { FiUploadCloud } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/ContextProvider";
import Notification from "../Notification/Notification";

const Navbar = ({ hideSideBar }) => {
  const { googleLogin, userLogout, user } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogout = () => {
    userLogout().catch((error) => {
      console.log(error);
    });
  };

  const [searchBar, setSearchBar] = useState(false);

  return (
    <div className=" fixed md:static w-full bg-white left-0 flex justify-between items-center  gap-3 h-12">
      <div className="flex items-center gap-6">
        <div>
          <img
            className={`${
              hideSideBar
                ? "block w-10 h-10 transition-all duration-300"
                : "w-20 md:w-0 transition-all duration-300"
            } `}
            src="https://res.cloudinary.com/dcckbmhft/image/upload/v1677914511/fav_dtornq.svg"
            alt=""
          />
        </div>
        <fieldset className="w-full space-y-1 text-gray-800">
          <label htmlFor="Search" className="hidden">
            Search
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                onClick={() => setSearchBar(!searchBar)}
                type="button"
                title="search"
                className=" hover:bg-gray-200 text-xl rounded-full p-2 focus:outline-none focus:ring"
              >
                <CgSearch />
              </button>
            </span>
            <div
              className={`fixed md:static left-0 flex items-center  ${
                searchBar
                  ? "top-12 transition-all duration-300"
                  : "-top-96 transition-all duration-300"
              } z-30 w-full md:block`}
            >
              <input
                type="search"
                name="Search"
                placeholder="Search..."
                className="md:w-64 py-2 w-full pl-10 text-sm  md:rounded-md sm:w-auto focus:outline-none rounded-l-md bg-gray-100 text-gray-800 focus:bg-gray-50 focus:border-violet-600"
              />
              <button
                onClick={() => setSearchBar(!searchBar)}
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
            <button
              className="hover:bg-gray-200 p-2 text-2xl rounded-full tooltip tooltip-bottom"
              data-tip="Upload"
            >
              <FiUploadCloud className="" />
            </button>
          </li>
          <Notification />
          <li>
            <div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className=" m-1">
                  <img
                    className="w-8 h-8 rounded-full object-cover"
                    src="https://res.cloudinary.com/dcckbmhft/image/upload/v1673848125/sample.jpg"
                    alt=""
                  />
                </label>
                {user?.email ? (
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 border bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a onClick={() => handleLogout()}>Logout</a>
                    </li>
                  </ul>
                ) : (
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 border bg-base-100 rounded-box w-52"
                  >
                    {/* <li>
                      <a onClick={() => handleGoogleLogin()}>Google Login</a>
                    </li> */}

                    <li>
                      <Link to={'/login'}>Login</Link>
                    </li>
                    <li>
                      <Link to={'/register'}>Register</Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
