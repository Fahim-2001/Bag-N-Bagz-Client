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
        <Link type="button" className="Btn my-10" to="/">
          Back to home page
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
