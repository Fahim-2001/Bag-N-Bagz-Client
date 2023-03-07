import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleProductDetails = () => {
  const bagDetails = useLoaderData();
  //   console.log(bagDetails);
  return (
    <div>
      <h1>{bagDetails.bag_name}</h1>
    </div>
  );
};

export default SingleProductDetails;
