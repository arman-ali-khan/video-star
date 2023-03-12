import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const Upload = () => {
  const videoData = useLoaderData({});

  const { videoUrl,title,thumb,id } = videoData;
  console.log(videoData)
  const animatedComponents = makeAnimated();

//   Tags data
 const options = [
  { value: 'movie', label: 'Movie' },
  { value: 'marvel', label: 'Marvel' },
  { value: 'dc', label: 'DC' },
  { value: 'world-news', label: 'World News' },
  { value: 'news', label: 'News' },
  { value: 'tools', label: 'Tools' },
  { value: 'funny', label: 'Funny' },
  { value: 'sports', label: 'Sports' },
  { value: 'music', label: 'Music' },
  { value: 'Gamming', label: 'Gamming' },
]
// Tags 
const [tags,setTags] = useState([])

const handleUpload = e =>{
    e.preventDefault();
   const newTitle = e.target.title.value;
   const updateData = {
    title:newTitle,
    tags,
    view:0
   }
   fetch(`http://localhost:5000/video/${id}`,{
    method:"PUT",
    headers:{
        'content-type':'application/json'
    },
    body: JSON.stringify(updateData)
   })
   .then(res=>res.json())
   .then(data=>{
    console.log(data)
    toast.success('Post Published')
   })
}


  return (
    <div className="flex m-12 gap-6">
      <div className="sm:w-7/12 md:w-full lg:w-7/12 w-full mx-auto">
        <form onSubmit={e=>handleUpload(e)}>
           
        <div>
        <p className="bg-gray-100 px-4 py-3 text-blue-600 ">Video Preview</p>
          <video className="w-full h-auto" controls="controls">
            <source src={videoUrl} type="video/mp4" />
            <source
              src="https://res.cloudinary.com/dcckbmhft/video/upload/c_limit,h_60,w_90/v1678515981/videostar/tg3dpozpf2vqvydrcfyc.jpg"
              type="video/ogg"
            />
          </video>
        </div>
         <div className="space-y-3 mt-3">
         <div>
            <input type="text" name="title" id="" className="input input-bordered w-full" defaultValue={title} />
          </div>
          <div>
          <Select
          onChange={(e)=>setTags(e)}
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={options}
    />
          </div>
         </div>
         <button className="btn w-full my-3 btn-warning">Publish</button>
        </form>
      </div>
    </div>
  );
};

export default Upload;
