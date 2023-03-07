import React from "react";
import { Link } from "react-router-dom";

const SearchBar = ({ searchTerm, setSearchTerm, allBags }) => {
  return (
    <div className="dropdown w-full">
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search Here"
          className="input input-bordered input-error w-full mx-10 text-black"
          onChange={(event) => setSearchTerm(event.target.value)}
          tabIndex={0}
        />
      </div>
      <div className="flex justify-center">
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100  rounded-box mt-5 w-4/5"
        >
          <li>
            {allBags
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.bag_name
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                ) {
                  return val;
                }
              })
              .map((bag) => (
                <Link to={`/productDetails/${bag._id}`} key={bag._id} bag={bag}>
                  {bag.bag_name}
                </Link>
              ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
