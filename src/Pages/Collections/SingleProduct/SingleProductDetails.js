import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleProductDetails = () => {
  // Bag Details from loader.
  const bagDetails = useLoaderData();

  // Destructured Properties from loader data.
  const {
    category,
    gender_category,
    bag_name,
    description,
    img,
    img2,
    img3,
    price,
    ratings,
  } = bagDetails;

  //React Slick Settings

  return (
    <div>
      <div className="mx-auto">
        <div className="carousel w-full">
          <div id="item1" className="flex justify-center carousel-item w-full">
            <img src={img} className="w-1/3" alt="" />
          </div>
          {img2 && (
            <div
              id="item2"
              className="flex justify-center carousel-item w-full"
            >
              <img src={img2} className="w-1/3" alt="" />
            </div>
          )}
          {img3 && (
            <div
              id="item3"
              className="flex justify-center carousel-item w-full"
            >
              <img src={img3} className="w-1/3" alt="" />
            </div>
          )}
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          {img2 && (
            <a href="#item2" className="btn btn-xs">
              2
            </a>
          )}
          {img3 && (
            <a href="#item3" className="btn btn-xs">
              3
            </a>
          )}
        </div>
      </div>
      <div className="text-left p-5 lg:p-20">
        <h1 className="text-3xl">{bag_name}</h1>
        <div className="pt-5">
          <p>{description}</p>
        </div>
        <div className="text-xl pt-5">
          <p className="flex justify-start items-center">
            Rating: {ratings}{" "}
            <svg
              aria-hidden="true"
              className="w-5 h-5 mx-1 text-yellow-700"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>{" "}
          </p>
          <p>Category: {category}</p>
          <p>Gender: {gender_category}</p>
          <p>Price: {price}</p>
        </div>
        <div className="flex justify-end my-5">
          <button className="bg-red-500 hover:bg-red-400 focus:bg-red-400 text-white font-medium text-sm rounded-sm px-5 ml-3 py-2.5 text-center">
            Add To Cart
          </button>
          <button className="bg-red-500 hover:bg-red-400 focus:bg-red-400 text-white font-medium text-sm rounded-sm px-5 ml-3 py-2.5 text-center">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetails;
