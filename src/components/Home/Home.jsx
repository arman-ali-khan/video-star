import React from 'react';

const Home = () => {
    return (
        // Hero Section
        <div className='flex items-center gap-2 w-full'> 
           <div className='w-1/2 h-44'>
            <img className='w-full h-full object-cover rounded-lg' src="https://res.cloudinary.com/dcckbmhft/image/upload/v1673848147/cld-sample-3.jpg" alt="" />
           </div>
           <div className='w-1/2 h-44'>
            <img className='w-full h-full object-cover rounded-lg' src="https://res.cloudinary.com/dcckbmhft/image/upload/v1673848147/cld-sample-3.jpg" alt="" />
           </div>
        </div>
    );
};

export default Home;