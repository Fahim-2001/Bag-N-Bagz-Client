import React from "react";

const SingleTopProduct = ({ topbag }) => {
  const { bag_name, gender_category, description, price, ratings, img } =
    topbag;
  return (
    <div>
      <div className="w-4/5 mx-auto my-5 bg-white border border-gray-200  shadow dark:bg-gray-900 dark:border-gray-900 hover:border-gray-900 hover:border-2">
        <img className="p-8 rounded-t-lg w-full h-72" src={img} alt="" />
        <div className="px-5 pb-5">
          <a href="/">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {bag_name}
            </h5>
          </a>
          <div className="text-left p-3">
            <p>{description.slice(0, 110)}....</p>
          </div>
          <div className="flex items-center mt-2.5 mb-5">
            <span className=" flex items-center bg-gray-700 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 ml-3">
              {ratings}
              <svg
                aria-hidden="true"
                className="w-5 h-5 mx-1 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </span>

            <span className="bg-gray-700 text-white text-sm font-semibold mr-2 px-2.5 py-0.5 ml-3">
              {gender_category}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold mr-3 text-gray-900 dark:text-white">
              ${price}
            </span>
            <a
              href="/"
              className="text-white bg-gray-700 hover:bg-gray-800 font-medium text-sm px-5 py-2.5 text-center "
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTopProduct;
