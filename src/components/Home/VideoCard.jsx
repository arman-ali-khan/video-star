import React from "react";
import { Link } from "react-router-dom";
import VideoThumbnail from 'react-video-thumbnail'; // use npm published version
import moment from 'moment';


const VideoCard = ({video}) => {
  const {thumb,author,email,date,title,id,videoUrl,view} = video;
  return (
   <>
   {
    view ?  <div className="w-full ">
    <Link to={`/video/${id}`} >
   <div className="h-44 w-full rounded-xl bg-gray-200 overflow-hidden">
   <VideoThumbnail
 videoUrl={videoUrl}
 
 />
   </div></Link>
   <div className="break-words h-24   ">
     <div className="flex items-center gap-1">
       <img
         className="w-12 h-12 rounded-full border-4 border-dotted border-blue-500 object-cover"
         src="https://res.cloudinary.com/dcckbmhft/image/upload/v1673848147/cld-sample.jpg"
         alt=""
       />
       <div>
         <Link to={`/video/${id}`} className="text-base leading-4 overflow-hidden font-bold">
           {title.slice(0,55)}{title.length>55 ? '...':''}
         </Link>
         <p className="text-sm">{author}</p>
         <div className="flex gap-3 text-sm">
           <p>View: {view}</p>
           <p>{moment(date).fromNow()}</p>
           
         </div>
       </div>
     </div>
   </div>
 </div>
 :''
   }
   </>
  );
};

export default VideoCard;
