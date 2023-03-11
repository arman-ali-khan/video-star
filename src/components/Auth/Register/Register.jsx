import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/ContextProvider";
import ButtonLoading from "../../Loader/ButtonLoading";

const Register = () => {
  // navigate
  const navigate = useNavigate();

  // Loading when user creating
  const [loading, setLoading] = useState(false);

  // context api
  const { createUser, updateUserData } = useContext(AuthContext);

  // signup error
  const [error, setError] = useState("");

  // react hook form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // firebase user create with email
  const handleCreateUser = (data) => {
    setLoading(true);
    const name = data.name;
    const email = data.email;
    const password = data.password;

    // user data
    const userData = {
      displayName: name,
    };
    createUser(email, password)
      .then((result) => {
        setError("");
        const user = result.user;
        console.log(user);
        // user data update in firebase
        handleUserDataUpdate(userData);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  };

  // firebase user data update
  const handleUserDataUpdate = (data) => {
    updateUserData(data)
      .then(() => {
        // loading stop if successfully update data
        setLoading(false);
        // Profile updated!
        // navigate to homepage
        navigate("/");
        toast.success("Welcome to Video Star");
      })
      .catch((error) => {
        console.error(error);
        // loading stop if throw an error
        setLoading(false);
      });
  };
  return (
    <div className="flex items-center h-screen justify-center">
      <form
        onSubmit={handleSubmit(handleCreateUser)}
        className="flex w-96 flex-col bg-gray-100 text-blue-600 rounded-xl p-12"
      >
        <div className="flex justify-center gap-2 w-full">
          <Link
            className="btn btn-sm w-1/2 btn-warning  rounded-md"
            to={"/login"}
          >
            Login
          </Link>
          <p className="btn hover:bg-transparent btn-sm w-1/2 btn-ghost  rounded-md">
            Register
          </p>
        </div>
        <label htmlFor="name">Full Name</label>
        <input
          {...register("name", { required: "Name is required" })}
          className="input input-bordered"
          type="text"
          id=""
        />
        {/* React hook form error show form name */}
        {errors.name && (
          <p className="text-rose-600" role="alert">
            {errors.name?.message}
          </p>
        )}
        <label htmlFor="email">Email</label>
        <input
          {...register("email", { required: "Email address is required" })}
          className="input input-bordered"
          type="email"
          id=""
        />
        {/* React hook form error show form emeil */}
        {errors.email && (
          <p className="text-rose-600" role="alert">
            {errors.email?.message}
          </p>
        )}
        <label htmlFor="password">Password</label>
        <input
          {...register("password", { required: "Password is required" })}
          className="input input-bordered"
          type="password"
          id=""
        />
        {/* React hook form error show form password */}
        {errors.password && (
          <p className="text-rose-600" role="alert">
            {errors.password?.message}
          </p>
        )}
        <p className="text-rose-500">{error}</p>
        <button type="submit" className="btn btn-warning my-3">
          {/* submit button */}
          {loading ? <ButtonLoading /> : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
