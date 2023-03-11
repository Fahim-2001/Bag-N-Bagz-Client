import React, { createContext, useContext } from "react";
import { useQuery } from "react-query";
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

  // Cart Data from localstorage
  const cartProducts = JSON.parse(localStorage.getItem("Cart"));

  const contextValue = {
    happyCustomersReviews,
    topBags,
    allBags,
    refetch,
    cartProducts,
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
