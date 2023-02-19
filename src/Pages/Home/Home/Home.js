import React from "react";
import CategoriesInHome from "../CategoriesInHome/CategoriesInHome";
import HomeBanner from "../HomeBanner/HomeBanner";
import TopProducts from "../TopProducts/TopProducts";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <CategoriesInHome></CategoriesInHome>
      <TopProducts></TopProducts>
    </div>
  );
};

export default Home;
