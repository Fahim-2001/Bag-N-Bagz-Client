import React from "react";
import "./Category.css";

const Category = ({ category }) => {
  const { category_details, img } = category;
  return (
    <div className="hover:scale-105 transition-all duration-700">
      <div
        className="card mx-10 my-4"
        style={{ backgroundImage: `url("${img}")`, backgroundSize: "cover" }}
      >
        <button className="card-button">{category_details}</button>
      </div>
    </div>
  );
};

export default Category;
