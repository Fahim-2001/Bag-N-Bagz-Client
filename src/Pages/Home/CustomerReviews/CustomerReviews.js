import React, { useContext } from "react";
import { useQuery } from "react-query";
import Slider from "react-slick";
import { RequestContext } from "../../../Contexts/RequestsProvider/RequestsProvider";
import CustomerReview from "./CustomerReview";

const CustomerReviews = () => {
  // Request Context
  const { happyCustomersReviewAPI } = useContext(RequestContext);

  // Happy Customer Reviews API load using REACT QUERY
  const { data: happyCustomersReviews = [] } = useQuery({
    queryKey: ["happyCustomerReview"],
    queryFn: async () => {
      const data = await (await fetch(happyCustomersReviewAPI)).json();
      return data;
    },
  });
  // console.log(happyCustomersReviews);

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
