import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { RiNotification4Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/ContextProvider";
import io from 'socket.io-client'
const socket = io.connect(import.meta.env.VITE_APP_API)
const Notification = () => {
  const {user} = useContext(AuthContext)

  // get user notifications
  const [notifications,setNotifications] = useState([])
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_APP_API}/notification?email=${user.email}`)
    .then(res=>setNotifications(res.data))
  },[socket])
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
          {
            notifications.map(notification=> <div key={notification._id} className="flex items-center w-full mb-1 hover:bg-gray-300 rounded-md">
           {
            notification.type === 'like' ? <AiOutlineLike className="text-3xl" /> : <BiCommentDetail className="text-3xl" />
           }
            <li className="flex items-center">
              <Link to={`/video/${notification.videoId}`} className="bg-transparent break-words w-72 md:w-80 text-left">
               {notification.name} {notification.type} your video {notification.title.slice(0,40)}
              </Link>
            </li>
          </div>)
          }
         
        </ul>
      </div>
    </li>
  );
};

export default Notification;
