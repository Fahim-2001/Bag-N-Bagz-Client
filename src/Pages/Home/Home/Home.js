import React from "react";
import CategoriesInHome from "../CategoriesInHome/CategoriesInHome";
import Collaborators from "../Collaborators/Collaborators";
import CustomerReviews from "../CustomerReviews/CustomerReviews";
import GiveReview from "../CustomerReviews/GiveReview/GiveReview";
import HomeBanner from "../HomeBanner/HomeBanner";
import Location from "../Location/Location";
import TopProducts from "../TopProducts/TopProducts";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <CategoriesInHome></CategoriesInHome>
      <TopProducts></TopProducts>
      <Collaborators></Collaborators>
      <CustomerReviews></CustomerReviews>
      <GiveReview></GiveReview>
      <Location></Location>
    </div>
  );
};

export default Home;
