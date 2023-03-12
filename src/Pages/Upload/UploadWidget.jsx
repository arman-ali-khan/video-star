import React, { useContext, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import { FiUploadCloud } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/ContextProvider";
  // uuid
  import { v4 as uuidv4 } from 'uuid';

const UploadWidget = () => {

  // UUID
  const id = uuidv4();

  // navigate
  const navigate = useNavigate();

  // context api
  const { user } = useContext(AuthContext);

  // cloudinary widget
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dcckbmhft",
        uploadPreset: "videostar",
        sources: ["local"],
      },
      function (error, result) {
        console.log(result)
        // Vidoe upload data to db
        const title = result.info.original_filename;
        const date = result.info.created_at
        const duration = result.info.duration
        const secure_url = result.info.secure_url;
        const thumb = result.info.thumbnail_url;
        if (secure_url) {
          // video data
          const videoData = {
            id: id,
            videoUrl: secure_url,
            author: user.displayName,
            email: user.email,
            title,
            date,
            duration,
            thumb
          };
          fetch(`${import.meta.env.VITE_APP_API}/video`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(videoData),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              toast.success("Video Uploaded");
              navigate(`/upload/${id}`);
            });
        }
      }
    );
  }, []);
  return (
    <div>
      <li className="flex justify-center items-center">
        <Link
          onClick={() => widgetRef.current.open()}
          className="hover:bg-gray-200 p-2 text-2xl rounded-full tooltip tooltip-bottom"
          data-tip="Upload"
        >
          <FiUploadCloud className="" />
        </Link>
      </li>
    </div>
  );
};

export default UploadWidget;
