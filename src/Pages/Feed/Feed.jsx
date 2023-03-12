import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData, useParams } from 'react-router-dom';
import VideoCard from '../../components/Home/VideoCard';

const Feed = () => {
  let { id } = useParams();
  const feedData = useLoaderData()


// Capitalize first word
const capitalizeWords = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

    return (
        <div>
        <Helmet>
                  <meta charSet="utf-8" />
                  <title className='capitalize'>{capitalizeWords(id)} || Video Star</title>
              </Helmet>
       <div className='w-full bg-blue-100 text-blue-600 py-4 px-3 rounded-xl my-3'>
          <h3 className='font-bold'>{capitalizeWords(id)}</h3>
         </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-2 w-full">
        
          {feedData.map((feed) =>
            <VideoCard key={feed._id} video={feed} />
          )}
        </div>
      </div>
    );
};

export default Feed;