import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/ContextProvider';
import {RiArrowDropUpLine,RiArrowDropDownLine} from 'react-icons/ri';

const Comment = ({comment}) => {
      // context api
  const {user} = useContext(AuthContext)

//   realtime reply update
const [replied,setReplied] = useState(false)
  // react hook form
    const { register,reset, formState: { errors }, handleSubmit } = useForm();

  // replay input box show hide
    const [showreply,setShowreply] = useState(false)

    // reply
    const handleReply = data=>{
      const reply = data.reply;
      const replyData = {
        reply,
        email: user.email,
        name: user.displayName,
        commentId: comment._id,
        commentEmail: comment.email,
      }
      fetch(`${import.meta.env.VITE_APP_API}/reply`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(replyData)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        toast.success('Replied')
        reset()
        setReplied(!replied)
      })
    }

    // get all replies
    const [replies,setReplies] = useState([])
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_APP_API}/replies/${comment._id}`)
        .then(res=>setReplies(res.data))
    },[replied])


    // replies show and hide
    const [replesShow,setRepliesShow] = useState(true)
    return (
        <div key={comment.id} className="w-full border rounded-lg my-2 p-3 flex gap-2">
        {/* Comments */}
        <div>
          <img
            src="https://i.ytimg.com/vi/hJh8l46YV0s/0.jpg"
            className="object-cover w-10 h-10 rounded-full"
            alt=""
          />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <h1 className="font-bold text-lg">Arman Ali</h1>
            <p>2 day ago</p>
          </div>
          <p className="leading-4">
            {comment.comment}
          </p>
          
          <button onClick={()=>setShowreply(!showreply)} className="btn btn-sm btn-ghost m-2">reply</button>
          {/* Input btn */}
{
showreply ? <form onSubmit={handleSubmit(handleReply)} className='flex items-center my-2'>
<input {...register("reply", { required: true })} placeholder='write reply'
className='input input-bordered rounded-r-none' type="text" id="" />
<button type='submit' className='btn rounded-l-none btn-warning'>reply</button>
</form>
:''
}
           {/* reply */}

          
          {
            replies.length === 1 &&  <button onClick={()=>setRepliesShow(!replesShow)} className='btn btn-sm btn-ghost'>{replesShow ? <RiArrowDropDownLine className='text-2xl' /> :<RiArrowDropUpLine className='text-2xl' /> }{replies.length} reply </button>
          }
          {
            replies.length > 1 &&  <button onClick={()=>setRepliesShow(!replesShow)} className='btn btn-sm btn-ghost'>{replesShow ? <RiArrowDropDownLine className='text-2xl' /> :<RiArrowDropUpLine className='text-2xl' /> } {replies.length} replies </button>
          }
      <div className={`${replesShow?'hidden':'block'}`}>
        {
            replies.map(reply=>
             <div key={reply._id} className="flex w-full gap-2 py-2 border-b">
          <div>
            <img
              src="https://i.ytimg.com/vi/hJh8l46YV0s/0.jpg"
              className="object-cover w-10 h-10 rounded-full"
              alt=""
            />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <h1 className="font-bold text-lg">{reply.name}</h1>
              <p>2 day ago</p>
            </div>
            <p className="leading-4">
             {reply.reply}
            </p>
          </div>
        </div>)
        }
       
      </div>
        </div>
      </div>
    );
};

export default Comment;