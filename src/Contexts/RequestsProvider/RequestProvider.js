import React, { createContext } from "react";

export const RequestContext = createContext();

const RequestsProvider = ({ children }) => {
  const requests = {
    allBagsData: "https://bag-n-bagz-server.vercel.app/bags",
    topProductsData: "https://bag-n-bagz-server.vercel.app/topProducts",
    happyCustomersReviewData: "https://bag-n-bagz-server.vercel.app/customersReview",
    accountsData: `https://bag-n-bagz-server.vercel.app/accounts`,
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
