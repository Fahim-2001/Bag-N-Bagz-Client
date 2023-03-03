import React, { createContext } from "react";

export const RequestContext = createContext();

const RequestsProvider = ({ children }) => {
  const requests = {
    topProductsAPI:
      "https://bag-n-bagz-server-9ew89jyq8-fahim-2001.vercel.app/topProducts",
    happyCustomersReviewAPI:
      "https://bag-n-bagz-server-9ew89jyq8-fahim-2001.vercel.app/customersReview",
    accountsAPI: `https://bag-n-bagz-server-9ew89jyq8-fahim-2001.vercel.app/accounts`,
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
