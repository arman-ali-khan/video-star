import React from "react";
import VideoCard from "./VideoCard";

const Home = () => {
  return (
    // Hero Section
    <div>
      <div className="flex overflow-auto scroll-smooth gap-1 my-2">
        <button className="btn btn-outline hover:bg-primary hover:text-black hover:border-transparent btn-sm">
          All
        </button>
        <button className="btn btn-outline hover:bg-primary hover:text-black hover:border-transparent btn-sm">
          Movie
        </button>
        <button className="btn btn-outline hover:bg-primary hover:text-black hover:border-transparent btn-sm">
          Marvel
        </button>
        <button className="btn btn-outline hover:bg-primary hover:text-black hover:border-transparent btn-sm">
          DC
        </button>
        <button className="btn btn-outline hover:bg-primary hover:text-black hover:border-transparent btn-sm">
          News
        </button>
        <button className="btn btn-outline hover:bg-primary hover:text-black hover:border-transparent btn-sm">
          Wrold News
        </button>
        <button className="btn btn-outline hover:bg-primary hover:text-black hover:border-transparent btn-sm">
          Tools
        </button>
        <button className="btn btn-outline hover:bg-primary hover:text-black hover:border-transparent btn-sm">
          Recent Uploaded
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-2 w-full">
        {[0, 3, 3, 3, 3, 3].map((video,i) => (
          <VideoCard key={i} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Home;
