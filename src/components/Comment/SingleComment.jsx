import React, { useState } from 'react';

const SingleComment = ({comments}) => {
    const [showreply,setShowreply] = useState(false)
    return (
        <>
            <div>
        {
            comments.map(comm =>  <div key={comm.id} className="w-full flex gap-2">
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
                {comm.comment}
              </p>
              
              <button onClick={()=>setShowreply(!showreply)} className="btn btn-sm btn-ghost m-2">reply</button>
              {/* Input btn */}
{
    showreply ? <div className='flex items-center'>
    <input className='input input-bordered rounded-r-none' type="text" name="" id="" />
    <button className='btn rounded-l-none btn-warning'>reply</button>
    </div>
    :''
}
               {/* reply */}
          <div className=" ">
            <div className="flex w-full gap-2">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                  consequuntur!
                </p>
              </div>
            </div>
          </div>
            </div>
          </div>)
        }

         
        </div>
        </>
    );
};

export default SingleComment;