import React from "react";

const CustomerReview = ({ happyCustomersReview }) => {
  const { customer_name, customer_img, customer_review } = happyCustomersReview;
  return (
    <div className="mx-5">
      <div className="container border-2 my-4 flex flex-col w-full max-w-lg p-6 divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              <img
                src={customer_img}
                alt=""
                className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold">{customer_name}</h4>
              <span className="text-xs dark:text-gray-400">2 days ago</span>
            </div>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm dark:text-gray-400">
          <p>{customer_review}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
