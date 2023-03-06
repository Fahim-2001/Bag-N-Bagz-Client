import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  return (
    <div>
      <div className=" card-style w-4/5 mx-auto my-5 border border-gray-200 hover:border-gray-300 rounded-md shadow-md hover:scale-105 transition-all duration-700">
        <img className="p-8 rounded-t-lg w-full h-72" src="" alt="" />
        <div className="px-5 pb-5">
          <a href="/">
            <h5 className="text-xl font-semibold tracking-tight">{}</h5>
          </a>
          <div className="text-left p-3">
            {/* <p>{description.slice(0, 110)}....</p> */}
          </div>
          <div className="flex items-center mt-2.5 mb-5">
            <span className="flex items-center bg-red-500 text-white text-xs font-semibold rounded-sm mr-2 px-2.5 py-0.5 ml-3">
              {}
              <svg
                aria-hidden="true"
                className="w-5 h-5 mx-1 text-yellow-200"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </span>

            <span className="bg-red-500 text-white text-sm font-semibold  rounded-sm mr-2 px-2.5 py-0.5 ml-3">
              {}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold mr-3">${}</span>
            <Link
              to="/"
              className="bg-red-500 hover:bg-red-400 focus:bg-red-400 text-white font-medium text-sm rounded-sm px-5 py-2.5 text-center"
            >
              Add to cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
