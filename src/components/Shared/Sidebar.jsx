import React from 'react';
import {GrHomeRounded} from 'react-icons/gr'
import {CgMenuLeft} from 'react-icons/cg'

const Sidebar = () => {
    return (
        <div className=''>
           
            <div>
                <ul className='mx-2'>
                  <a href="#" className='flex hover:bg-blue-100 items-center gap-2 px-2'> <GrHomeRounded /> <li className='py-2'> Home</li></a>
                  <a href="#" className='flex hover:bg-blue-100 items-center gap-2 px-2'> <GrHomeRounded /> <li className='py-2'> Home</li></a>
                  <a href="#" className='flex hover:bg-blue-100 items-center gap-2 px-2'> <GrHomeRounded /> <li className='py-2'> Home</li></a>
                  <a href="#" className='flex hover:bg-blue-100 items-center gap-2 px-2'> <GrHomeRounded /> <li className='py-2'> Home</li></a>
                  <a href="#" className='flex hover:bg-blue-100 items-center gap-2 px-2'> <GrHomeRounded /> <li className='py-2'> Home</li></a>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;