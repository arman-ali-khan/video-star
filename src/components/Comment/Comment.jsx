import React, { useState } from 'react';
import { BiComment } from 'react-icons/bi';

const Comment = ({commnetBox, setCommentBox}) => {
   
    return (
        <>
           <div
            onClick={() => setCommentBox(!commnetBox)}
            className="hover:bg-blue-100 select-none cursor-pointer px-4 py-2 flex justify-center rounded-full text-blue-600 bg-gray-200 w-full items-center gap-3"
          >
            <BiComment className="text-2xl" />
            <p className="text-lg font-bold">0</p>
          </div>   
        </>
    );
};

export default Comment;