import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Lottie from "react-lottie-player";
import { Link } from "react-router-dom";
import GoogleIcon from "../../../Assets/Icons/GoogleIcon.png";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import Animation from "./../Animation.json";

const Login = () => {
  // React-Hook-Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // AuthProvider
  const { signIn } = useContext(AuthContext);

  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <div>
      <section class="flex flex-col md:flex-row md:justify-center h-3/4 items-center">
        <div class="hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <Lottie
            className="mx-auto h-screen"
            loop
            animationData={Animation}
            play
          ></Lottie>
        </div>
        <div
          class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
        >
          <div class="w-full h-100">
            <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">
              Log in to your account
            </h1>
            <form
              class="mt-6 mx-auto"
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
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-red-500 focus:bg-white focus:outline-none"
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

              <div class="mt-4">
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter Password"
                  minlength="6"
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-red-500
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

              <div class="text-right mt-2">
                <a
                  href="/"
                  class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                class="w-full block bg-red-500 hover:bg-red-400 focus:bg-red-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
              >
                Log In
              </button>
            </form>

            <hr class="my-6 border-gray-300 w-full" />

            <button
              type="button"
              class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
            >
              <div class="flex items-center justify-center">
                <img src={GoogleIcon} alt="" width={"40px"} />
                <span class="ml-4">Log in with Google</span>
              </div>
            </button>

            <p class="mt-8">
              Need an account?{" "}
              <Link
                to="/register"
                class="text-blue-500 hover:text-blue-700 font-semibold"
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
