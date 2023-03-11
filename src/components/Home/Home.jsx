import axios from "axios";
import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

const Home = () => {
  const [tag,setTag] = useState('')
  const [videos,setVideos] = useState([])
  useEffect(()=>{
    axios.get(`http://localhost:5000/videos/${tag}`)
    .then(res=>setVideos(res.data))
  },[tag])
  return (
    // Hero Section
    <div>
      <div className="flex overflow-auto scroll-smooth gap-1 my-2">
        <button onClick={()=>setTag('')} className="btn btn-outline hover:bg-primary hover:text-black hover:border-transparent btn-sm">
          All
        </button>
        <button onClick={()=>setTag('movies')} className="btn btn-outline hover:bg-primary hover:text-black hover:border-transparent btn-sm">
          Movies
        </button>
        <button onClick={()=>setTag('marvel')} className="btn btn-outline hover:bg-primary hover:text-black hover:border-transparent btn-sm">
          Marvel
        </button>
        <button onClick={()=>setTag('dc')} className="btn btn-outline hover:bg-primary hover:text-black hover:border-transparent btn-sm">
          DC
        </button>
        <button onClick={()=>setTag('news')} className="btn btn-outline hover:bg-primary hover:text-black hover:border-transparent btn-sm">
          News
        </button>
        <button onClick={()=>setTag('world-news')} className="btn btn-outline hover:bg-primary hover:text-black hover:border-transparent btn-sm">
          Wrold News
        </button>
        <button onClick={()=>setTag('tools')} className="btn btn-outline hover:bg-primary hover:text-black hover:border-transparent btn-sm">
          Tools
        </button>
        <button onClick={()=>setTag('')} className="btn btn-outline hover:bg-primary hover:text-black hover:border-transparent btn-sm">
          Recent Uploaded
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-2 w-full">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Home;
