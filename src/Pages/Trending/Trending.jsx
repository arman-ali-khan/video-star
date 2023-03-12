import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import VideoCard from '../../components/Home/VideoCard';

const Trending = () => {
    // loading
    const [loading,setLoading] = useState(true)


    // get all videos sort by view
    const [trending,setTrending] = useState([])
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_APP_API}/trending`)
        .then(res=>{
            setTrending(res.data)
            setLoading(false)
        })
    },[])
    console.log(trending)
    return (
        <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Trending || Video Star</title>
            </Helmet>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-2 w-full">
       
        {trending.map((trend) => (
          loading ? <div className="flex flex-col px-3 -z-10 rounded shadow-md w-full gap-3 animate-pulse h-64">
	<div className="h-44 rounded-xl bg-gray-300"></div>
	<div className="flex-1 px-4 py-8 space-y-4  bg-gray-50">
		<div className="w-full h-6 rounded bg-gray-300"></div>
		<div className="w-full h-6 rounded bg-gray-300"></div>
	</div>
</div>
          :
          <VideoCard key={trend._id} video={trend} />
        ))}
      </div>
    </div>
    );
};

export default Trending;