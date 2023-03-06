import React, { createContext } from "react";

export const RequestContext = createContext();

const RequestsProvider = ({ children }) => {
  const requests = {
    allBagsData: "http://localhost:5000/bags",
    topProductsData: "http://localhost:5000/topProducts",
    happyCustomersReviewData: "http://localhost:5000/customersReview",
    accountsData: `http://localhost:5000/accounts`,
  };
  return (
    <div>
      <RequestContext.Provider value={requests}>
        {children}
      </RequestContext.Provider>
    </div>
  );
};

export default RequestsProvider;
