import React from "react";
import { useQuery } from "react-query";
import SingleTopProduct from "./SingleTopProduct";

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
    <div>
      <h1>
        {topBags.map((topbag) => (
          <SingleTopProduct key={topbag._id} topbag={topbag}></SingleTopProduct>
        ))}
      </h1>
    </div>
  );
};

export default TopProducts;
