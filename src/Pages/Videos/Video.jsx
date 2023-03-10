import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AiOutlineShareAlt } from "react-icons/ai";
import { AuthContext } from "../../context/ContextProvider";
import { toast } from "react-hot-toast";
import Share from "../../components/Modal/Share";
import axios from "axios";
import Like from "../../components/Like/Like";
import ButtonLoading from "../../components/Loader/ButtonLoading";
import { useForm } from "react-hook-form";
import Comments from "../../components/Comment/Comments";
import CommentButton from "../../components/Comment/CommentButton";
import { Helmet } from "react-helmet";
import moment from 'moment';

const Video = () => {



  // Context api
  const { user } = useContext(AuthContext);

  // realtime comment update
  const [commented, setCommented] = useState(false);

  //   react hook form
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // Show hide description
  const [showDesc, setShowDesc] = useState(false);

  // show comment input box
  const [commnetBox, setCommentBox] = useState(false);
  // load data from route (router dom)
  const videoData = useLoaderData({});

  // destructure
  const { email, author, title, thumb, id, videoUrl,view,date,desc } = videoData;

  // loading comment
  const [loading, setLoading] = useState(false);

  const [comment, setComment] = useState("");

  const handleComment = (data) => {
    setLoading(true);
    const commentData = {
      comment: data.comment,
      email: user.email,
      author,
      title,
      thumb,
      postEmail: email,
      id,
    };
    fetch(`${import.meta.env.VITE_APP_API}/comment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Commented");
        setLoading(false);
        reset();
        setCommented(!commented);
        
      });
  };


  // get all comment
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API}/comments/${id}`)
      .then((res) => setComments(res.data));
  }, [comment, commented]);





  return (
    <div className="md:flex gap-2">
      <div className="md:w-3/5">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{videoData.title}</title>
        </Helmet>
        <div className="mt-16 md:mt-0">
        
          <video className="rounded-md w-full h-auto" controls="controls">
            <source src={videoUrl} type="video/mp4" />
            <source
              src="https://res.cloudinary.com/dcckbmhft/video/upload/c_limit,h_60,w_90/v1678515981/videostar/tg3dpozpf2vqvydrcfyc.jpg"
              type="video/ogg"
            />
          </video>
        </div>
        {/* Video title  */}
        <div>
          <div>
            <h3 className="text-xl font-bold">{videoData.title}</h3>
          </div>
        </div>
        {/* video like */}
        <div className="flex justify-between items-center gap-2 mt-4">
          <Like videoData={videoData} />

          {/* Comment btn */}
          <CommentButton
            comments={comments}
            setCommentBox={setCommentBox}
            commnetBox={commnetBox}
          />
          {/* Share btn */}
          <label
            htmlFor="share"
            className="hover:bg-blue-100 cursor-pointer px-4 py-2 flex justify-center rounded-full text-blue-600 bg-gray-200 w-full"
          >
            <AiOutlineShareAlt className="text-2xl" />
          </label>
        </div>
        {/* <button className="btn " onClick={handleNotification}>Send</button> */}
        {/* Description */}
        <div className="my-3">
          <div className="flex items-center gap-4">
          <p className="font-bold">{view} views</p>
          <p className="font-bold">{moment(date).fromNow()}</p>
          </div>
          {
            desc.length >100 ? <p>{showDesc ? desc : desc.slice(0, 100) +'...'}</p>
            :
            <p>{desc }</p>
          }
          {desc.length > 100 ? (
            <button
              onClick={() => setShowDesc(!showDesc)}
              className="btn btn-sm btn-ghost shadow-md"
            >
              {showDesc ? "show less" : "show more"}
            </button>
          ) : (
            ""
          )}
        </div>
        {/* comment box */}
        <form
          onSubmit={handleSubmit(handleComment)}
          className={`w-full flex my-4 ${
            commnetBox ? "h-auto" : "h-0 overflow-hidden"
          }`}
        >
          <input
            {...register("comment", { required: true })}
            onChange={(e) => setComment(e.target.value)}
            type="text"
            placeholder="Write comment"
            className="input input-bordered rounded-r-none w-full"
            id=""
          />
          <button
            disabled={comment.length < 5}
            className="btn btn-warning w-32 rounded-l-none"
          >
            {loading ? <ButtonLoading /> : "Comment"}
          </button>
        </form>
        <Comments comments={comments} />
      </div>
      <div className="md:w-2/5">
        <p className="bg-blue-100 text-blue-600 px-4 py-2">Related Videos</p>
      </div>
      <Share id={id} />
    </div>
  );
};

export default Video;
