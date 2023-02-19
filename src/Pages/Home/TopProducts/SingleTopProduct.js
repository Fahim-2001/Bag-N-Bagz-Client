import React from "react";
import "./SingleTopProduct.css";

const SingleTopProduct = ({ topbag }) => {
  const {
    category,
    bag_name,
    gender_category,
    description,
    price,
    ratings,
    img,
  } = topbag;
  return (
    <div class="card">
      <div class="img img1" style={{ backgroundImage: `url("${img}")` }}></div>
      <div class="img img2"></div>
      <div class="card__content">
        <span class="name">John Doe</span>
        <span class="job">Software engineer</span>
      </div>
    </div>
  );
};

export default SingleTopProduct;
