import React from "react";
import CategoriesInHome from "../CategoriesInHome/CategoriesInHome";
import Collaborators from "../Collaborators/Collaborators";
import CustomerReviews from "../CustomerReviews/CustomerReviews";
import HomeBanner from "../HomeBanner/HomeBanner";
import TopProducts from "../TopProducts/TopProducts";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <CategoriesInHome></CategoriesInHome>
      <TopProducts></TopProducts>
      <Collaborators></Collaborators>
      <CustomerReviews></CustomerReviews>
    </div>
  );
};

export default Home;
