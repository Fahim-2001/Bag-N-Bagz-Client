import React from "react";
import "./Category.css";

const Category = ({ category }) => {
  const { category_id, category_name, category_link, category_details, img } =
    category;
  return (
    <div
      class="card w-full my-4 mx-10"
      style={{
        backgroundImage: `url("${img}")`,
        backgroundSize: "cover",
      }}
    >
      <button class="card-button">{category_details}</button>
    </div>
  );
};

export default Category;
