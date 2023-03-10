import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Lottie from "react-lottie-player";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GoogleIcon from "../../../Assets/Icons/GoogleIcon.png";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import Animation from "./../Animation.json";

const Login = () => {
  // Google auth provider
  const provider = new GoogleAuthProvider();

  // Navigate
  const navigate = useNavigate();

  // Location
  const location = useLocation();

  // From location
  const from = location.state?.from?.pathname || "/";

  // React-Hook-Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // AuthProvider
  const { signIn, googleSignIn } = useContext(AuthContext);

  const handleLogin = (data) => {
    // console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log(user);

        // Get jwt token
        const currentUser = { email: user.email };

        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("user-token", data.token);
            navigate(from, { replace: true });
            toast.success("Successfully logged in!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          })
          .catch((err) => console.log(err.message));
      })
      .catch((err) => console.log(err));
  };

  // Google Login
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
    <div>
      <section className="flex flex-col md:flex-row md:justify-center h-3/4 items-center">
        <div className="hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <Lottie
            className="mx-auto h-screen"
            loop
            animationData={Animation}
            play
          ></Lottie>
        </div>
        <div
          className=" w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
        >
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Log in to your account
            </h1>
            <form
              className="mt-6 mx-auto"
              action="#"
              method="POST"
              onSubmit={handleSubmit(handleLogin)}
            >
              <div>
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
                    required: "Provide your email address!",
                  })}
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email?.message}</p>
                )}
              </div>

              <div className="mt-4">
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter Password"
                  minlength="6"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 bg-gray-200 mt-2 border focus:border-red-500
                focus:bg-white focus:outline-none"
                  required
                  {...register("password", {
                    required: "Please provide your password!",
                  })}
                />
                {errors.password && (
                  <p className="text-red-600">{errors.password?.message}</p>
                )}
              </div>

              <div className="text-right mt-2">
                <a
                  href="/"
                  className="text-sm font-semibold  hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full block bg-red-500 hover:bg-red-400 focus:bg-red-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
              >
                Log In
              </button>
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

            <p className="mt-8">
              Need an account?{" "}
              <Link
                to="/register"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
