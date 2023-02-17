import React from "react";
import BannerImage from "../../../Assets/Images/HomeBannerImage.jpg";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <div className="flex justify-center">
      <img src={BannerImage} width="100%" alt="" />
    </div>
  );
};

export default HomeBanner;
