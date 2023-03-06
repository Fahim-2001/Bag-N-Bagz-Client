import React, { useContext, useState } from "react";
import { DataContext } from "../../../Contexts/DataProvider/DataProvider";
import Pagination from "../Pagination/Pagination";
import SingleProduct from "../SingleProduct/SingleProduct";

const Collections = () => {
  // All Bags Data from Data Contexts
  const { allBags } = useContext(DataContext);
  //   console.log(allBags);

  //   Pagination Utils
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const fixedBagsPerPage = allBags.slice(firstProductIndex, lastProductIndex);
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
        {fixedBagsPerPage.map((bag) => (
          <SingleProduct key={bag._id} bag={bag}></SingleProduct>
        ))}
      </div>
      <Pagination
        totalProducts={allBags.length}
        productsPerPage={productsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        setProductsPerPage={setProductsPerPage}
      ></Pagination>
    </div>
  );
};

export default Collections;
