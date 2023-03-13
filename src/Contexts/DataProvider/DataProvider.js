import React, { createContext, useContext } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import useLocalStorage from "use-local-storage";

import { RequestContext } from "../RequestsProvider/RequestProvider";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  // Request Context
  const { happyCustomersReviewData, topProductsData, allBagsData } =
    useContext(RequestContext);

  // All bag data load using REACT QUERY
  const { data: allBags = [] } = useQuery({
    queryKey: ["allBags"],
    queryFn: async () => {
      const data = await (await fetch(allBagsData)).json();
      return data;
    },
  });

  // Happy Customer Reviews data load using REACT QUERY
  const { data: happyCustomersReviews = [], refetch } = useQuery({
    queryKey: ["happyCustomerReview"],
    queryFn: async () => {
      const data = await (await fetch(happyCustomersReviewData)).json();
      return data;
    },
  });

  // Top Products data load using React Query
  const { data: topBags = [] } = useQuery({
    queryKey: ["bags"],
    queryFn: async () => {
      const data = await (await fetch(topProductsData)).json();
      return data;
    },
  });

  // Quantity of a product
  const [cart, setCart] = useLocalStorage("Cart", []);

  // Add To Cart Process
  const handleAddToCart = (product) => {
    let newCart = [];

    // Existing Product
    const existing = cart.find(
      (cartProduct) => cartProduct._id === product._id
    );

    if (!existing) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const restProducts = cart.filter(
        (cartProduct) => cartProduct._id !== product._id
      );

      existing.quantity = existing.quantity + 1;

      newCart = [...restProducts, existing];
    }

    setCart(newCart);
    toast.success("Item added to cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  // Cart Data from localstorage by function [For Real time data load]
  const getCartProducts = () => {
    const data = JSON.parse(localStorage.getItem("Cart"));
    return data;
  };

  // console.log(getCartProducts());

  const contextValue = {
    happyCustomersReviews,
    topBags,
    allBags,
    refetch,
    handleAddToCart,
    getCartProducts,
  };
  return (
    <div>
      <DataContext.Provider value={contextValue}>
        {children}
      </DataContext.Provider>
    </div>
  );
};

export default DataProvider;
