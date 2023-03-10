import React from "react";

const VideoCard = () => {
  return (
    <div className="w-full h-">
      <div className="h-44">
        <img
          className="w-full h-full object-cover rounded-lg"
          src="https://res.cloudinary.com/dcckbmhft/image/upload/v1673848147/cld-sample-3.jpg"
          alt=""
        />
      </div>
      <div className="break-words">
        <div className="flex items-center gap-1">
          <img
            className="w-12 h-12 rounded-full border-4 border-dotted border-blue-500 object-cover"
            src="https://res.cloudinary.com/dcckbmhft/image/upload/v1673848147/cld-sample.jpg"
            alt=""
          />
          <div>
            <p className="text-base font-bold leading-5">
              Lorem ipsum dolor sit amet{" "}
            </p>
            <p className="text-sm">Arman Ali Khan</p>
            <div className="flex gap-3 text-sm">
              <p>View: 23</p>
              <p>3day ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
