import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const Upload = () => {
  const videoData = useLoaderData({});

  // navigate
  const navigate = useNavigate()

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
  { value: 'gaming', label: 'Gaming' },
]
// Tags 
const [tags,setTags] = useState([])


const handleUpload = e =>{
    e.preventDefault();
   const newTitle = e.target.title.value;
   const desc = e.target.desc.value;
   const updateData = {
    title:newTitle,
    tags,
    desc,
    view:0
   }
   fetch(`${import.meta.env.VITE_APP_API}/video/${id}`,{
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
    navigate(`/video/${id}`)
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
          <p>Title</p>
            <input type="text" name="title" id="" className="input input-bordered w-full" defaultValue={title} />
          </div>
          <div>
            <p>Select Tags</p>
          <Select
          onChange={(e)=>setTags(e)}
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={options}
    />
          </div>
          <div>
            <p>Description</p>
            <textarea name="desc" className="textarea textarea-bordered w-full"></textarea>
          </div>
         </div>
         <button disabled={tags.length===0} className="btn w-full my-3 btn-warning">Publish</button>
        </form>
      </div>
    </div>
  );
};

export default Upload;
