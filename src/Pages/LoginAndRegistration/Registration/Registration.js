import React from "react";
import Lottie from "react-lottie-player";
import { Link } from "react-router-dom";
import SignUpAnimation from "../SignUpAnimation.json";

const Registration = () => {
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
          <form class="mt-6 mx-auto" action="#" method="POST">
            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your Full Name"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-red-500 focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
              />
            </div>

            <div class="mt-4">
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter Email Address"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-red-500 focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
              />
            </div>

            <div class="mt-4">
              <input
                type="password"
                name=""
                id=""
                placeholder="Enter new Password"
                minlength="8"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-red-500
                focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div class="mt-4">
              <input
                type="password"
                name=""
                id=""
                placeholder="Comfirm new Password"
                minlength="8"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-red-500
                focus:bg-white focus:outline-none"
                required
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
