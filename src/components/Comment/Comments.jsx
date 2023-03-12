import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/ContextProvider';
import Comment from './Comment';

const Comments = ({comments}) => {

    return (
        <>
            <div>
        {
            comments.map(comment => <Comment key={comment._id} comment={comment} />)
        }

         
        </div>
        </>
    );
};

export default Comments;