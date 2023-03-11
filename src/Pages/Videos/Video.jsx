import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {AiOutlineLike, AiOutlineShareAlt} from 'react-icons/ai'
import {BiComment} from 'react-icons/bi'

const Video = () => {
    const videoData = useLoaderData({})
    return (
        <div className='flex gap-2'>
            <div className='w-3/5'>
                <div>
                <video className="rounded-md h-auto" controls="controls">
            <source src={videoData.videoUrl} type="video/mp4" />
            <source
              src="https://res.cloudinary.com/dcckbmhft/video/upload/c_limit,h_60,w_90/v1678515981/videostar/tg3dpozpf2vqvydrcfyc.jpg"
              type="video/ogg"
            />
          </video>
                </div>
                <div className='flex justify-between items-center gap-2 mt-4'>
                    <div className='bg-blue-100 px-4 py-2 flex justify-center rounded-full text-blue-600 w-full'><AiOutlineLike className='text-4xl' /></div>
                    <div className='bg-blue-100 px-4 py-2 flex justify-center rounded-full text-blue-600 w-full'><BiComment className='text-4xl' /></div>
                    <div className='bg-blue-100 px-4 py-2 flex justify-center rounded-full text-blue-600 w-full'><AiOutlineShareAlt className='text-4xl' /></div>
                </div>
            </div>
            <div className='w-2/5'>
                <p className='bg-blue-100 text-blue-600 px-4 py-2'>Related Videos</p>
            </div>
        </div>
    );
};

export default Video;