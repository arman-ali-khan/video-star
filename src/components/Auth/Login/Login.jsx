import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/ContextProvider";
import ButtonLoading from "../../Loader/ButtonLoading";

const Login = () => {
     // navigate
  const navigate = useNavigate();

  // Loading when user creating
  const [loading, setLoading] = useState(false);

  // context api
  const { loginUser } = useContext(AuthContext);

    // login error
    const [error, setError] = useState("");

  // react hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // user login
  const handleUserLogin = (data) => {
    // loading true when click login button
    setLoading(true)

    const email = data.email;
    const password = data.password;
    // Firebase login with email
    loginUser(email,password)
    .then(result =>{
        const user = result.user;
        // Error remove in user successful
        setError('')
        toast.success(`Welcome Back ${user.displayName}`)
        // loading false when user login successfully 
        setLoading(false)
        navigate('/')
    })
    .catch((error) => {
        const errorMessage = error.message;
        // set login error
        setError(errorMessage)
        //  loading false when throw an error
        setLoading(false)
      })
  };
  return (
    <div className="flex items-center h-screen justify-center">
      <form
        onSubmit={handleSubmit(handleUserLogin)}
        className="flex w-96 flex-col bg-blue-50 text-blue-600 rounded-xl p-12"
      >
        <div className="flex justify-center gap-2 w-full">
          <p className="btn hover:bg-transparent btn-sm w-1/2 btn-ghost  rounded-md">
            Login
          </p>
          <Link
            className="btn btn-sm w-1/2  btn-warning  rounded-md"
            to={"/register"}
          >
            Register
          </Link>
        </div>
        <label htmlFor="email">Email</label>
        {/* email input field */}
        <input
          {...register("email", { required: "Email Address is required" })}
          className="input input-bordered"
          type="email"
          id=""
        />
        {errors.email && <p className="text-rose-600" role="alert">{errors.email?.message}</p>}

        <label htmlFor="email">Password</label>
        {/* password input field */}
        <input
          {...register("password", { required: "Password is required" })}
          className="input input-bordered"
          type="password"
          id=""
        />
        {errors.password && <p className="text-rose-600" role="alert">{errors.password?.message}</p>}
        <p className="text-rose-600">{error}</p>
        <button type="submit" className="btn btn-warning my-3">
            {
                loading ? <ButtonLoading />
                :
                'Login'
            }
        </button>
      </form>
    </div>
  );
};

export default Login;
