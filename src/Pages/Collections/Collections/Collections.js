import React, { useContext } from "react";
import { DataContext } from "../../../Contexts/DataProvider/DataProvider";

const Collections = () => {
  // All Bags Data from Data Contexts
  const { allBags } = useContext(DataContext);
  console.log(allBags);
  return (
    <div>
      <h1>Collections</h1>
    </div>
  );
};

export default Collections;
