import React from "react";
import BannerImage from "../../../Assets/Images/Bag N BagZ Find Your Top-Class Bag.jpg";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <div className="flex justify-center">
      <img src={BannerImage} style={{ width: "1100px" }} alt="" />
    </div>
  );
};

export default HomeBanner;
