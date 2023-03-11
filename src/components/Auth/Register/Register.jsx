import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/ContextProvider";
import ButtonLoading from "../../Loader/ButtonLoading";

const Register = () => {
    const [loading,setLoading] = useState(false)

    const {createUser,updateUserData} = useContext(AuthContext)

    const [error,setError] = useState('')
console.log(error)
    const handleCreateUser = (e) =>{
        setLoading(true)
        e.preventDefault();
        const name = e.target.name.value
        const userData = {
            displayName: name,
        }
        const email = e.target.email.value
        const password = e.target.password.value
        createUser(email,password)
        .then(result=>{
            setError('')
            const user = result.user
            console.log(user)
            handleUserDataUpdate(userData)
        })
        .catch(error=>{
            setLoading(false)
            setError(error.message)
        })
    }

    const handleUserDataUpdate = (data) =>{
        updateUserData(data)
        .then(() => {
            setLoading(false)
            // Profile updated!
          }).catch((error) => {
            
            console.error(error);
          });
    }
  return (
    <div className="flex items-center h-screen justify-center">
      <form onSubmit={e=>handleCreateUser(e)} className="flex w-96 flex-col bg-gray-100 text-blue-600 rounded-xl p-12">
        <div className="flex justify-center gap-2 w-full">
          <Link className="btn btn-sm w-1/2 btn-warning  rounded-md" to={"/login"}>Login</Link>
          <button className="btn hover:bg-transparent btn-sm w-1/2 btn-ghost  rounded-md">Register</button>
        </div>
        <label htmlFor="name">Full Name</label>
        <input className="input input-bordered" type="text" name="name" id="" />
        <label htmlFor="email">Email</label>
        <input className="input input-bordered" type="email" name="email" id="" />
        <label htmlFor="password">Password</label>
        <input className="input input-bordered" type="password" name="password" id="" />
        <p className="text-rose-500">{error}</p>
        <button className="btn btn-warning my-3">
            {
                loading ?   <ButtonLoading />
                :
                'Register'
            }
        </button>
      </form>
    </div>
  );
};

export default Register;
