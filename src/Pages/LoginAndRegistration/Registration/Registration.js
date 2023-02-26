import React from "react";
import { useForm } from "react-hook-form";
import Lottie from "react-lottie-player";
import { Link } from "react-router-dom";
import SignUpAnimation from "../SignUpAnimation.json";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = (data) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col md:flex-row md:justify-center h-3/4 items-center">
      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex flex-col items-center justify-center"
      >
        <div className="w-full h-100">
          <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">
            Create an account
          </h1>
          <form
            class="mt-6 mx-auto"
            action="#"
            method="POST"
            onSubmit={handleSubmit(handleRegistration)}
          >
            <div>
              <input
                type="text"
                name="fullName"
                id=""
                placeholder="Enter Your Full Name"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-red-500 focus:bg-white focus:outline-none"
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

            <div class="mt-4">
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
                  required: "Please provide an email address!",
                })}
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>

            <div class="mt-4">
              <input
                type="password"
                name="password"
                id=""
                placeholder="Enter new Password"
                minlength="8"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-red-500
                focus:bg-white focus:outline-none"
                required
                {...register("password", {
                  minLength: 8,
                  required: "Please provide a password!",
                })}
              />
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
            </div>

            <div class="mt-4">
              <input
                type="password"
                name="confirmedPassword"
                id=""
                placeholder="Comfirm new Password"
                minlength="8"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-red-500
                focus:bg-white focus:outline-none"
                required
                {...register("confirmedPassword", {
                  required: "Passwords didn't match!",
                  minLength: 8,
                })}
              />
            </div>

            <button
              type="submit"
              class="w-full block bg-red-500 hover:bg-red-400 focus:bg-red-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
            >
              Sign Up
            </button>

            <p class="mt-8">
              Already have an account?{" "}
              <Link
                to="/login"
                class="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Log In
              </Link>
            </p>
          </form>
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
