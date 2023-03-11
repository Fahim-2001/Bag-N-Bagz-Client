import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BrandLogo from "../../../Assets/Images/BrandLogo.png";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import DarkLight from "./Dark_Light/DarkLight";

const Header = () => {
  // Auth Context
  const { user, logOut } = useContext(AuthContext);

  // Items need to show in navigation bar.
  const menuItems = (
    <>
      <Link className="p-3 text-xl hover:" to="/">
        Home
      </Link>

      <Link className="p-3 text-xl hover:" to="/">
        Catagory
      </Link>

      <Link className="p-3 text-xl hover:" to="/collections">
        Collections
      </Link>

      <Link className="p-3 text-xl hover:" to="/">
        Contact Us
      </Link>
    </>
  );

  // Cart Icon
  const cartIcon = (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      <span className="flex absolute -mt-5 ml-4">
        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
      </span>
    </>
  );
  return (
    <div className="flex flex-wrap">
      <section className="relative mx-auto">
        {/* <!-- navbar --> */}
        <nav className="flex justify-between   font-serif w-screen z-[2]">
          <div className="px-5 xl:px-12 py-2 flex w-full items-center">
            <Link className="text-3xl font-bold font-heading" to="/">
              <img
                className="h-9"
                src={BrandLogo}
                style={{
                  width: "90px",
                  height: "90px",
                }}
                alt="logo"
              />
            </Link>
            {/* <!-- Nav Links --> */}
            <ul className="hidden lg:flex px-4 mx-auto  space-x-12">
              {menuItems}
            </ul>
            {/* <!-- Header Icons --> */}
            <div className="hidden lg:flex items-center space-x-5 ">
              <DarkLight></DarkLight>
              <Link className="" to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </Link>
              {/* Cart Icon */}
              <Link className="flex items-center" title="cart" to="/cart">
                {cartIcon}
              </Link>
              {/* <!-- Sign In / Register      --> */}
              {user?.uid ? (
                <>
                  {/* User Name */}
                  <Link className="flex items-center text-lg" to="/dashboard">
                    {user.displayName}
                  </Link>

                  {/* Log Out Icon */}
                  <Link className="flex items-center " onClick={() => logOut()}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-log-out"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                  </Link>
                </>
              ) : (
                // Login Icon
                <Link className="flex items-center " to="/login">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </div>
          {/* <!-- Responsive navbar --> */}
          {/* Cart Icon */}
          <Link className=" lg:hidden flex mr-6 items-center" to="/cart">
            {cartIcon}
          </Link>
          <div className="lg:hidden dropdown dropdown-left flex items-center mr-2">
            <label tabIndex={0} className="">
              <button className="relative group">
                <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                  <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                    <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
                    <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
                    <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>

                    <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                      <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                      <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                    </div>
                  </div>
                </div>
              </button>
            </label>
            <ul
              tabIndex={0}
              className="card-style dropdown-content menu p-3 shadow bg-base-100 font-serif rounded-box "
            >
              {menuItems}
              {user?.uid ? (
                <>
                  <Link
                    className="flex justify-center items-center my-2 mx-auto"
                    to="/dashboard"
                  >
                    {user.displayName}
                  </Link>

                  {/* Logout Icon */}
                  <Link
                    className="flex justify-center items-center my-2 mx-auto"
                    onClick={() => logOut()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-log-out"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                  </Link>
                </>
              ) : (
                // Login Icon
                <Link
                  className="flex justify-center items-center my-2 mx-auto"
                  to="/login"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Link>
              )}
              <DarkLight></DarkLight>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Header;
