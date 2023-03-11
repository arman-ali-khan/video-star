import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  AiOutlineLike,
  AiOutlineShareAlt,
  AiTwotoneLike,
} from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { AuthContext } from "../../context/ContextProvider";
import { toast } from "react-hot-toast";
import Share from "../../components/Modal/Share";

const Video = () => {
  // Context api
  const { user } = useContext(AuthContext);

  // load data from route (router dom)
  const videoData = useLoaderData({});

  // destructure
  const { email, author, title, thumb, id, videoUrl } = videoData;

  // is liked
  const [isLiked, setIsLiked] = useState(["f"]);

  // show comment input box
  const [commnetBox, setCommentBox] = useState(false);

  // handle video like
  const handleLike = (id) => {
    const likeData = {
      id,
      name: user.displayName,
      email: user.email,
      postEmail: email,
      author: author,
      title: title,
      thumb: thumb,
    };
    fetch(`loac/like`, {
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
      });
  };

  return (
    <div className="flex gap-2">
      <div className="w-3/5">
        <div>
          <video className="rounded-md h-auto" controls="controls">
            <source src={videoUrl} type="video/mp4" />
            <source
              src="https://res.cloudinary.com/dcckbmhft/video/upload/c_limit,h_60,w_90/v1678515981/videostar/tg3dpozpf2vqvydrcfyc.jpg"
              type="video/ogg"
            />
          </video>
        </div>

        {/* video like */}
        <div className="flex justify-between items-center gap-2 mt-4">
          {isLiked.length ? (
            // like btn
            <div
              onClick={() => handleLike(_id)}
              className={`cursor-pointer px-4 py-2 flex items-center justify-center gap-3 rounded-full text-blue-600 ${
                isLiked.length
                  ? "bg-blue-100 hover:bg-gray-200"
                  : "bg-gray-200 hover:bg-blue-100"
              } w-full tooltip`}
              data-tip={` ${isLiked.length ? "Unlike" : "I like this"}`}
            >
              <AiTwotoneLike className="text-2xl text-blue-600" />
              <p className="text-lg font-bold">{isLiked.length}</p>
            </div>
          ) : (
            // Unlike btn
            <div
              onClick={() => handleLike(_id)}
              className={`cursor-pointer px-4 py-2 flex justify-center  rounded-full text-blue-600 ${
                isLiked.length
                  ? "bg-blue-100 hover:bg-gray-200"
                  : "bg-gray-200 hover:bg-blue-100"
              } w-full tooltip`}
              data-tip={` ${isLiked.length ? "Unlike" : "I like this"}`}
            >
              <AiOutlineLike className="text-2xl " />
              <p className="text-lg font-bold">{isLiked.length}</p>
            </div>
          )}

          {/* Comment btn */}
          <div
            onClick={() => setCommentBox(!commnetBox)}
            className="hover:bg-blue-100 select-none cursor-pointer px-4 py-2 flex justify-center rounded-full text-blue-600 bg-gray-200 w-full items-center gap-3"
          >
            <BiComment className="text-2xl" />
            <p className="text-lg font-bold">{isLiked.length}</p>
          </div>
          {/* Share btn */}
          <label
            htmlFor="share"
            className="hover:bg-blue-100 cursor-pointer px-4 py-2 flex justify-center rounded-full text-blue-600 bg-gray-200 w-full"
          >
            <AiOutlineShareAlt className="text-2xl" />
          </label>
        </div>
        <div
          className={`w-full flex my-4 ${
            commnetBox ? "h-auto" : "h-0 overflow-hidden"
          }`}
        >
          <input
            type="text"
            placeholder="Write comment"
            className="input input-bordered rounded-r-none w-full"
            id=""
          />
          <button className="btn btn-warning rounded-l-none">Comment</button>
        </div>
        <div>
          <div className="w-full flex gap-2">
            {/* Comments */}
            <div>
              <img
                src="https://i.ytimg.com/vi/hJh8l46YV0s/0.jpg"
                className="object-cover w-10 h-10 rounded-full"
                alt=""
              />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <h1 className="font-bold text-lg">Arman Ali</h1>
                <p>2 day ago</p>
              </div>
              <p className="leading-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                consequuntur!
              </p>
              <button className="btn btn-sm btn-ghost m-2">Replay</button>
            </div>
          </div>

          {/* Replay */}
          <div className="ml-12 ">
            <div className="flex w-full gap-2">
              <div>
                <img
                  src="https://i.ytimg.com/vi/hJh8l46YV0s/0.jpg"
                  className="object-cover w-10 h-10 rounded-full"
                  alt=""
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <h1 className="font-bold text-lg">Arman Ali</h1>
                  <p>2 day ago</p>
                </div>
                <p className="leading-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                  consequuntur!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/5">
        <p className="bg-blue-100 text-blue-600 px-4 py-2">Related Videos</p>
      </div>
      <Share id={id} />
    </div>
  );
};

export default Video;
