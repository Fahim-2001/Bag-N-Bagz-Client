import React from "react";
import Lottie from "react-lottie-player";
import { Link } from "react-router-dom";
import HeartAnimation from "./Animation404.json";

const PageNotFound = () => {
  return (
    <div className="h-screen lg:w-1/2 lg:mx-auto flex justify-center items-center">
      <div>
        <Lottie
          className="mx-auto my-auto "
          loop
          animationData={HeartAnimation}
          play
        ></Lottie>
        <Link
          type="button"
          className="btn my-10 bg-red-500 focus:bg-red-400 text-white font-medium text-sm"
          to="/"
        >
          Back to home page
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
