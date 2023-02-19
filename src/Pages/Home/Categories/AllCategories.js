import React from "react";
import Category from "./Category";

const AllCategories = () => {
  const categories = [
    {
      category_id: 1,
      category_name: "Mountain_Bags",
      category_link: "https://bag-n-bagz-server.vercel.app/bags/Mountain_Bags",
      category_details: "Mountain Bags",
      img: "https://media.self.com/photos/631b4a70f2e14e40474de07c/2:3/w_2474,h_3711,c_limit/gifts-for-hikers.jpeg",
    },
    {
      category_id: 2,
      category_name: "School_Bags",
      category_link: "https://bag-n-bagz-server.vercel.app/bags/School_Bags",
      category_details: "School Bags",
      img: "https://watermark.lovepik.com/photo/20211124/large/lovepik-female-school-uniform-students-with-backpacks-picture_500925533.jpg",
    },
    {
      category_id: 3,
      category_name: "Ladies_Bags",
      category_link: "https://bag-n-bagz-server.vercel.app/bags/Ladies_Bags",
      category_details: "Ladies Bags",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ48Z3Yn3vNIIGA1VQ2Vb54GjOiJ9-EOUPcAQ&usqp=CAU",
    },
    {
      category_id: 4,
      category_name: "Men_Bags",
      category_link: "https://bag-n-bagz-server.vercel.app/bags/Men_Bags",
      category_details: "Men Bags",
      img: "https://images.unsplash.com/photo-1620911166732-fbad9a32385f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbiUyMGJhZ3xlbnwwfHwwfHw%3D&w=1000&q=80",
    },
  ];
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Category key={category.category_id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
