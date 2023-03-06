import React, { useContext } from "react";
import { DataContext } from "../../../Contexts/DataProvider/DataProvider";
import SingleProduct from "../SingleProduct/SingleProduct";

const Collections = () => {
  // All Bags Data from Data Contexts
  const { allBags } = useContext(DataContext);
  console.log(allBags);
  return (
    <div className="">
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search Here"
          className="input input-bordered input-error w-full mx-10 text-black"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {allBags.map((bag) => (
          <SingleProduct key={bag._id} bag={bag}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default Collections;
