import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex items-center h-screen justify-center'>
            <div className='flex w-96 flex-col bg-blue-50 text-blue-600 rounded-xl p-12'>
            <div className="flex justify-center gap-2 w-full">
          <button className="btn hover:bg-transparent btn-sm w-1/2 btn-ghost  rounded-md">Login</button>
          <Link className="btn btn-sm w-1/2  btn-warning  rounded-md" to={"/register"}>Register</Link>
        </div>
                <label htmlFor="email">Email</label>
                <input className='input input-bordered' type="email" name="" id="" />
                <label htmlFor="email">Password</label>
                <input className='input input-bordered' type="email" name="" id="" />
                <button className='btn btn-warning my-3'>Login</button>
            </div>
        </div>
    );
};

export default Login;