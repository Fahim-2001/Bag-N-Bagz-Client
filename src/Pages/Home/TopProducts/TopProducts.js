import React from "react";
import { useQuery } from "react-query";
import SingleTopProduct from "./SingleTopProduct/SingleTopProduct";

const TopProducts = () => {
  const { data: topBags = [] } = useQuery({
    queryKey: ["bags"],
    queryFn: async () => {
      const data = await (
        await fetch("http://localhost:5000/topProducts")
      ).json();
      return data;
    },
  });
  console.log(topBags);
  return (
    <div className="my-12">
      <h1 className="text-3xl font-serif my-8">Top Products</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {topBags.map((topbag) => (
            <SingleTopProduct
              key={topbag._id}
              topbag={topbag}
            ></SingleTopProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
