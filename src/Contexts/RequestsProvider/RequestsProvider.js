import React, { createContext } from "react";

export const RequestContext = createContext();

const RequestsProvider = ({ children }) => {
  const requests = {
    topProductsAPI: "http://localhost:5000/topProducts",
    happyCustomersReviewAPI: "http://localhost:5000/customersReview",
    accountsAPI: `http://localhost:5000/accounts`,
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
