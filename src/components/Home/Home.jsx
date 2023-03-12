import axios from "axios";
import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

const Home = () => {
  // loading until fetch data
  const [loadig,setLoading] = useState(true)
  // tags
  const [tag,setTag] = useState('')

  // get all videos
  const [videos,setVideos] = useState([])
  useEffect(()=>{
    axios.get(`http://localhost:5000/videos/${tag}`)
    .then(res=>{
      setVideos(res.data)
      setLoading(false)
    })
  },[tag])

 

  return (
    <div>
      <div className="flex overflow-auto scroll-smooth gap-1 my-2">
        <button onClick={()=>setTag('')} className="btn btn-outline hover:bg-primary hover:text-black hover:border-transparent btn-sm">
          All
        </button>
        <button onClick={()=>setTag('movie')} className="btn btn-outline hover:bg-primary hover:text-black hover:border-transparent btn-sm">
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
        <button onClick={()=>setTag('sports')} className="btn btn-outline hover:bg-primary hover:text-black hover:border-transparent btn-sm">
         Sports
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-2 w-full">
       
        {videos.map((video) => (
          loadig ? <div className="flex flex-col px-3 -z-10 rounded shadow-md w-full gap-3 animate-pulse h-64">
	<div className="h-44 rounded-xl bg-gray-300"></div>
	<div className="flex-1 px-4 py-8 space-y-4  bg-gray-50">
		<div className="w-full h-6 rounded bg-gray-300"></div>
		<div className="w-full h-6 rounded bg-gray-300"></div>
	</div>
</div>
          :
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Home;
