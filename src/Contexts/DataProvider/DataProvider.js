import React, { createContext, useContext } from "react";
import { useQuery } from "react-query";
import { RequestContext } from "../RequestsProvider/RequestsProvider";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  // Request Context
  const { happyCustomersReviewAPI, topProductsAPI } =
    useContext(RequestContext);

  // Happy Customer Reviews API load using REACT QUERY
  const { data: happyCustomersReviews = [], refetch } = useQuery({
    queryKey: ["happyCustomerReview"],
    queryFn: async () => {
      const data = await (await fetch(happyCustomersReviewAPI)).json();
      return data;
    },
  });

  // Top Products API data load using React Query
  const { data: topBags = [] } = useQuery({
    queryKey: ["bags"],
    queryFn: async () => {
      const data = await (await fetch(topProductsAPI)).json();
      return data;
    },
  });

  const contextValue = { happyCustomersReviews, topBags, refetch };
  return (
    <div>
      <DataContext.Provider value={contextValue}>
        {children}
      </DataContext.Provider>
    </div>
  );
};

export default DataProvider;
