import React from "react";
import { RiNotification4Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Notification = () => {
  return (
    <li
      className="flex justify-center items-center duration-300 transition-all tooltip tooltip-bottom"
      data-tip="Notifications"
    >
      <div className="dropdown dropdown-end">
        <label
          tabIndex={0}
          className=" m-1 hover:bg-gray-200 p-2 rounded-full flex justify-center items-center "
        >
          <button className="text-2xl relative">
            <RiNotification4Line />
            <span className="absolute top-[2px] right-[2px] h-2 w-2 bg-green-500 rounded-full"></span>
          </button>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content mt-2 rounded-md menu p-2 shadow bg-base-100 w-80 md:w-96"
        >
          <div className="flex items-center w-full mb-1 hover:bg-gray-300 rounded-md">
            <img
              className="w-12 h-12 rounded-full"
              src="https://res.cloudinary.com/dcckbmhft/image/upload/v1673848147/cld-sample-3.jpg"
              alt=""
            />
            <li className="flex items-center">
              <Link className="bg-transparent break-words w-72 md:w-80 text-left">
                User like your video fsdf fsdaf sdfsadf sdf aseYour video title
              </Link>
            </li>
          </div>

          <div className="flex items-center w-full mb-1 hover:bg-gray-300 rounded-md">
            <img
              className="w-12 h-12 rounded-full"
              src="https://res.cloudinary.com/dcckbmhft/image/upload/v1673848147/cld-sample-3.jpg"
              alt=""
            />
            <li className="flex items-center">
              <Link className="bg-transparent break-words w-72 md:w-80 text-left">
                User Comment your video Your video title
              </Link>
            </li>
          </div>

          <div className="flex items-center w-full mb-1 hover:bg-gray-300 rounded-md">
            <img
              className="w-12 h-12 rounded-full"
              src="https://res.cloudinary.com/dcckbmhft/image/upload/v1673848147/cld-sample-3.jpg"
              alt=""
            />
            <li className="flex items-center">
              <Link className="bg-transparent break-words w-72 md:w-80 text-left">
                User posted new video Your video title
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </li>
  );
};

export default Notification;
