import React from "react";
import { useQuery } from "react-query";
import CustomerReview from "./CustomerReview";

const CustomerReviews = () => {
  const { data: happyCustomersReviews = [] } = useQuery({
    queryKey: ["happyCustomerReview"],
    queryFn: async () => {
      const data = await (
        await fetch("http://localhost:5000/customersReview")
      ).json();
      return data;
    },
  });
  // console.log(happyCustomersReviews);
  return (
    <div>
      <h1 className="text-3xl font-serif mb-8">Happy Customers</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto">
        {happyCustomersReviews.map((happyCustomersReview) => (
          <CustomerReview
            key={happyCustomersReview._id}
            happyCustomersReview={happyCustomersReview}
          ></CustomerReview>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
