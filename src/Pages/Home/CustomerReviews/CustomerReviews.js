import React from "react";
import { useQuery } from "react-query";
import Slider from "react-slick";
import CustomerReview from "./CustomerReview";

const CustomerReviews = () => {
  const { data: happyCustomersReviews = [] } = useQuery({
    queryKey: ["happyCustomerReview"],
    queryFn: async () => {
      const data = await (
        await fetch(
          "https://bag-n-bagz-server-popqhvw0b-fahim-2001.vercel.app/customersReview"
        )
      ).json();
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
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
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
