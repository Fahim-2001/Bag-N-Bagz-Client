import React from "react";
import "./Category.css";

const Category = ({ category }) => {
  const { category_id, category_name, category_link, category_details, img } =
    category;
  return (
    <div
      class="card mx-10 my-4"
      style={{ backgroundImage: `url("${img}")`, backgroundSize: "cover" }}
    >
      <button class="card-button">{category_details}</button>
    </div>
  );
};

export default Category;
