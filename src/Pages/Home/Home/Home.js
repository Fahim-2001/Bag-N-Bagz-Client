import React from "react";
import CategoriesInHome from "../CategoriesInHome/CategoriesInHome";
import HomeBanner from "../HomeBanner/HomeBanner";
import TopProducts from "../TopProducts/TopProducts";
import Collaborators from "../Collaborators/Collaborators";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <CategoriesInHome></CategoriesInHome>
      <TopProducts></TopProducts>
      <Collaborators></Collaborators>
    </div>
  );
};

export default Home;
