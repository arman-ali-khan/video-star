import React from 'react';

const SingleComment = ({comments}) => {
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
              
              <button className="btn btn-sm btn-ghost m-2">Replay</button>
               {/* Replay */}
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