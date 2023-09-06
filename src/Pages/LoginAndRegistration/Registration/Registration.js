import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Lottie from "react-lottie-player";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import SignUpAnimation from "../SignUpAnimation.json";
import GoogleIcon from "../../../Assets/Icons/GoogleIcon.png";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { RequestContext } from "../../../Contexts/RequestsProvider/RequestProvider";

const Registration = () => {
  // Google auth provider
  const provider = new GoogleAuthProvider();

  // Navigate
  const navigate = useNavigate();

  // Location
  const location = useLocation();

  // From location
  const from = location.state?.from?.pathname || "/";

  // React-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // Request Context
  const { accountsData } = useContext(RequestContext);

  // AuthContext
  const { googleSignIn, creatUser, updateUserProfile } =
    useContext(AuthContext);

  // Password
  const password = watch("password", "");

  // Create an Account Function
  const handleRegistration = (data) => {
    const user = {
      name: data.fullName,
      email: data.email,
      role: "user",
    };
    creatUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        updateUserProfile(data.fullName);
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));

    // Fetching user data to server.
    fetch(accountsData, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data._id) {
          toast.success("Account Created Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      });
  };

  // Create Account with Google Function
  const handleGoogleLogin = () => {
    googleSignIn(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-center h-3/4 items-center">
      <div
        className="w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex flex-col items-center justify-center"
      >
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            Create an account
          </h1>
          <form
            className="mt-6 mx-auto"
            action="#"
            method=""
            onSubmit={handleSubmit(handleRegistration)}
          >
            <div>
              <input
                type="text"
                name="fullName"
                id=""
                placeholder="Enter Your Full Name"
                className="w-full px-4 py-3 rounded-lg text-gray-900 bg-gray-200 mt-2 border focus:border-red-500 focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
                {...register("fullName", {
                  required: "Please provide your full name!",
                })}
              />
              {errors.fullName && (
                <p className="text-red-600">{errors.fullName?.message}</p>
              )}
            </div>

            <div className="mt-4">
              <input
                type="email"
                name="email"
                id=""
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg text-gray-900 bg-gray-200 mt-2 border focus:border-red-500 focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
                {...register("email", {
                  required: "Please provide an email address!",
                })}
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>

            <div className="mt-4">
              <input
                type="password"
                name="password"
                id=""
                placeholder="Enter new Password"
                minlength="6"
                className="w-full px-4 py-3 rounded-lg text-gray-900 bg-gray-200 mt-2 border focus:border-red-500
                focus:bg-white focus:outline-none"
                required
                {...register("password", {
                  minLength: 6,
                  required: "Please provide a password!",
                })}
              />
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
            </div>

            <div className="mt-4">
              <input
                type="password"
                name="confirmedPassword"
                id=""
                placeholder="Comfirm new Password"
                minlength="6"
                className="w-full px-4 py-3 rounded-lg text-gray-900 bg-gray-200 mt-2 border focus:border-red-500
                focus:bg-white focus:outline-none"
                required
                {...register("confirmedPassword", {
                  validate: (value) =>
                    value === password || "Passwords didn't match!",
                })}
              />
              {errors && (
                <p className="text-red-600">
                  {errors.confirmedPassword?.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full block bg-red-500 hover:bg-red-400 focus:bg-red-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
            >
              Sign Up
            </button>

            <p className="mt-8">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Log In
              </Link>
            </p>
          </form>

          <hr className="my-6 border-gray-300 w-full" />

          <button
            type="button"
            className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
            onClick={handleGoogleLogin}
          >
            <div className="flex items-center justify-center">
              <img src={GoogleIcon} alt="" width={"40px"} />
              <span className="ml-4">Log in with Google</span>
            </div>
          </button>
        </div>
      </div>
      <div className="hidden lg:block w-full md:w-1/2 xl:w-2/3">
        <Lottie
          className="mx-auto h-screen"
          loop
          animationData={SignUpAnimation}
          play
        ></Lottie>
      </div>
    </div>
  );
};

export default Registration;
