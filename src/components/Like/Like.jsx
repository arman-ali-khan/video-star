import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { AuthContext } from "../../context/ContextProvider";
import io from "socket.io-client";

const socket = io.connect('https://video-star.onrender.com:10000');

const Like = ({ videoData }) => {
  // Socket io
  const handleNotification = () => {
    socket.emit("send_message", {
      message: `${
        user.email === videoData.email
          ? " You Like your video " + videoData.title
          : user.displayName + " Like video " + videoData.title
      }`,
    });
  };

  useEffect(() => {
    if (user.email!==videoData.email) {
      socket.on("receive_message", (data) => {
        toast.success(data.message);
      });
    }
  }, [socket]);

  // Context api
  const { user } = useContext(AuthContext);
  // destructure
  const { email, author, title, thumb, id, videoUrl } = videoData;

  // is liked
  const [isLiked, setIsLiked] = useState([]);
  // All likes
  const [likes, setLikes] = useState([]);

  // likeUpdate
  const [likeUpdate, setLikeUpdate] = useState(false);

  // handle video like
  const handleLike = (id) => {
    const likeData = {
      id,
      name: user?.displayName,
      email: user.email,
      postEmail: email,
      author: author,
      title: title,
      thumb: thumb,
    };
    fetch(`${import.meta.env.VITE_APP_API}/like`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(likeData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Liked");
        setLikeUpdate(!likeUpdate);
        handleNotification(videoData);
        handleNotify();
      });
  };

  const handleNotify = () => {
    const notifyData = {
      user: user.email,
      name: user.displayName,
      email: videoData.email,
      videoId: videoData.id,
      title: videoData.title,
      type: "like",
    };
    console.log(notifyData);
    fetch(`${import.meta.env.VITE_APP_API}/notification`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(notifyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  // Unlike
  const handleUnLike = (id) => {
    fetch(`${import.meta.env.VITE_APP_API}/unlike/${id}?email=${user?.email}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Unliked");
        setLikeUpdate(!likeUpdate);
      });
  };

  //   Get if user like
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API}/like/${id}?email=${user?.email}`)
      .then((res) => setIsLiked(res.data));
  }, [user?.email, likeUpdate]);

  //   Get all likes
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API}/likes/${id}`)
      .then((res) => setLikes(res.data));
  }, [user?.email, likeUpdate]);

  return (
    <>
      {user?.email ? (
        <>
          {isLiked.length ? (
            // like btn
            <div
              onClick={() => handleUnLike(id)}
              className={`cursor-pointer px-4 py-2 flex items-center justify-center gap-3 rounded-full text-blue-600 ${
                isLiked.length
                  ? "bg-blue-100 hover:bg-gray-200"
                  : "bg-gray-200 hover:bg-blue-100"
              } w-full tooltip`}
              data-tip="Unlike"
            >
              <AiTwotoneLike className="text-2xl text-blue-600" />
              <p className="text-lg font-bold">{likes.length}</p>
            </div>
          ) : (
            // Unlike btn
            <div
              onClick={() => handleLike(id)}
              className={`cursor-pointer px-4 py-2 flex items-center justify-center gap-3 rounded-full text-blue-600 ${
                isLiked.length
                  ? "bg-blue-100 hover:bg-gray-200"
                  : "bg-gray-200 hover:bg-blue-100"
              } w-full tooltip`}
              data-tip="I like this"
            >
              <AiOutlineLike className="text-2xl " />
              <p className="text-lg font-bold">{likes.length}</p>
            </div>
          )}
        </>
      ) : (
        //  like btn show for non logged user
        <div
          className={`cursor-pointer px-4 py-2 flex items-center justify-center gap-3 rounded-full text-blue-600 ${
            isLiked.length
              ? "bg-blue-100 hover:bg-gray-200"
              : "bg-gray-200 hover:bg-blue-100"
          } w-full tooltip`}
          data-tip="Login to like"
        >
          <AiOutlineLike className="text-2xl " />
          <p className="text-lg font-bold">{likes.length}</p>
        </div>
      )}
    </>
  );
};

export default Like;
