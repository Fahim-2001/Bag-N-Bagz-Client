import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { DataContext } from "../../../../Contexts/DataProvider/DataProvider";
import { RequestContext } from "../../../../Contexts/RequestsProvider/RequestsProvider";

const GiveReview = () => {
  // Requests Context
  const { happyCustomersReviewAPI } = useContext(RequestContext);

  // Refetch function from DataContext
  const { refetch } = useContext(DataContext);
  // React Hook form
  const { register, handleSubmit } = useForm();

  const handleServiceReview = (data) => {
    const serviceReview = {
      customer_name: data.customer_name,
      customer_email: data.customer_email,
      customer_review: data.customer_review,
      customer_img:
        "https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png",
    };
    // console.log(serviceReview);
    fetch(happyCustomersReviewAPI, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data._id) {
          toast.success("Thank You For Your Review ", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          refetch();
        }
      });
  };

  return (
    <div className="my-16">
      <h1 className="text-3xl font-serif mb-8">
        Put Your Valuable Comments Here
      </h1>
      <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <form
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
            onSubmit={handleSubmit(handleServiceReview)}
          >
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered w-full"
                {...register("customer_name")}
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                {...register("customer_email")}
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                rows="3"
                className="textarea textarea-bordered w-full text-black"
                {...register("customer_review")}
              ></textarea>
            </label>
            <button
              type="submit"
              className="btn bg-red-500 hover:bg-red-400 focus:bg-red-400 text-white font-medium text-sm"
            >
              Submit
            </button>
          </form>
          <div className="py-6 my-12 lg:my-16 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Fake address, 9999 City</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>123456789</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>contact@business.com</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GiveReview;
