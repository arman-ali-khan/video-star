import React, { useEffect, useRef } from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const UploadWidget = () => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dcckbmhft',
            uploadPreset: 'videostar',
            sources: [ 'local',],
        },function(error,result){
            console.log(result.info.url)
        }
        )
    }, []);
    return (
        <div>
            <li className="flex justify-center items-center">
            <Link  onClick={()=>widgetRef.current.open()} to={'/upload'}
              className="hover:bg-gray-200 p-2 text-2xl rounded-full tooltip tooltip-bottom"
              data-tip="Upload"
            >
              <FiUploadCloud className="" />
              

            </Link>
          </li>
        </div>
    );
};

export default UploadWidget;