import React, { useContext } from "react";
import Slider from "react-slick";
import { DataContext } from "../../../Contexts/DataProvider/DataProvider";
import CustomerReview from "./CustomerReview";

const CustomerReviews = () => {
  // Happy Customer Reviews from Data Context
  const { happyCustomersReviews } = useContext(DataContext);

  // React Slick (VERTICAL)
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <div>
      <h1 className="text-3xl font-serif mb-8">Happy Customers</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto">
        <Slider className="w-screen" {...settings}>
          {happyCustomersReviews.map((happyCustomersReview) => (
            <CustomerReview
              key={happyCustomersReview._id}
              happyCustomersReview={happyCustomersReview}
            ></CustomerReview>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomerReviews;
